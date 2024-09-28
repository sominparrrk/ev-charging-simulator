import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ConcurrencyOutput } from '../types/simulator';

interface ConcurrencyContextType {
  result: ConcurrencyOutput | null;
  setConcurrencyResult: (result: ConcurrencyOutput) => void;
}

const ConcurrencyContext = createContext<ConcurrencyContextType | undefined>(
  undefined
);

export const useConcurrencyContext = () => {
  const context = useContext(ConcurrencyContext);
  if (!context) {
    throw new Error(
      'useConcurrencyContext must be used within a ConcurrencyProvider'
    );
  }
  return context;
};

interface ConcurrencyProviderProps {
  children: ReactNode;
}

export const ConcurrencyProvider: React.FC<ConcurrencyProviderProps> = ({
  children,
}) => {
  const [result, setResult] = useState<ConcurrencyOutput | null>(null);

  const setConcurrencyResult = (result: ConcurrencyOutput) => {
    setResult(result);
  };

  return (
    <ConcurrencyContext.Provider value={{ result, setConcurrencyResult }}>
      {children}
    </ConcurrencyContext.Provider>
  );
};
