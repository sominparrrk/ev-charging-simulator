import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SimulatorOutput } from '../types/simulator';

interface SimulationContextType {
  result: SimulatorOutput | null;
  setSimulationResult: (result: SimulatorOutput) => void;
}

// Create the context with a default value
const SimulationContext = createContext<SimulationContextType | undefined>(
  undefined
);

export const useSimulationContext = () => {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error(
      'useSimulationContext must be used within a SimulationProvider'
    );
  }
  return context;
};

interface SimulationProviderProps {
  children: ReactNode;
}

export const SimulationProvider: React.FC<SimulationProviderProps> = ({
  children,
}) => {
  const [result, setResult] = useState<SimulatorOutput | null>(null); // Initialize with `null` or default value

  const setSimulationResult = (result: SimulatorOutput) => {
    setResult(result);
  };

  return (
    <SimulationContext.Provider value={{ result, setSimulationResult }}>
      {children}
    </SimulationContext.Provider>
  );
};
