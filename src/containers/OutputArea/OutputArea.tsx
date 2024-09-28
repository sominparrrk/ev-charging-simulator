import React, { ReactNode } from 'react';
import { useSimulationContext } from '../../context/SimulationContext';

interface ComponentProps {
  children: ReactNode;
}

const Title: React.FC<ComponentProps> = ({ children }) => {
  return <h3>{children}</h3>;
};

const Value: React.FC<ComponentProps> = ({ children }) => {
  return <p>{children}</p>;
};

const FlexContainer: React.FC<ComponentProps> = ({ children }) => {
  return <div className='flex flex-row justify-between'>{children}</div>;
};

const OutputArea = () => {
  const { result } = useSimulationContext();
  return (
    <div
      className={`${
        result ? '' : 'blur'
      } output-area__container flex flex-col gap-4 w-full`}
    >
      <FlexContainer>
        <Title>Total energy consumed</Title>
        <Value>{result?.totalEnergyConsumed.toFixed(2)} kWh</Value>
      </FlexContainer>
      <FlexContainer>
        <Title>Theoretical maximum power demand</Title>
        <Value>{result?.theoreticalMaxPowerDemand} kW</Value>
      </FlexContainer>
      <FlexContainer>
        <Title>Actual maximum power demand</Title>
        <Value>{result?.actualMaxPowerDemand} kW</Value>
      </FlexContainer>
      <FlexContainer>
        <Title>Concurrency Factor</Title>
        <Value>{result?.concurrencyFactor} %</Value>
      </FlexContainer>
    </div>
  );
};

export default OutputArea;
