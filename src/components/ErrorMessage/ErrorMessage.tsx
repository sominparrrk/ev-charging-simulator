import React, { ReactNode } from 'react';

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <div className='text-rose-800'>{children}</div>;
};

export default ErrorMessage;
