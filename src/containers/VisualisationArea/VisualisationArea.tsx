import React, { ReactNode, useState } from 'react';
import Select from '../../components/Select/Select';
import { useSimulationContext } from '../../context/SimulationContext';
import ValuesPerChargePoint from './Chart/ValuesPerChargePoint';
import { defaultMockData } from '../../lib/defaultMockData';
import ConcurrencyDeviation from './Chart/ConcurrencyDeviation';
import { useConcurrencyContext } from '../../context/ConcurrencyContext';

interface ComponentProps {
  children: ReactNode;
  className?: string;
}

const Title: React.FC<ComponentProps> = ({ children }) => {
  return <h3 className='font-bold'>{children}</h3>;
};

const VisualisationArea = () => {
  const { result: simulatorResult } = useSimulationContext();
  const { result: concurrencyResult } = useConcurrencyContext();
  const [selectedValue, setSelectedValue] = useState('0');
  const dailyUsagePerChargePoint =
    simulatorResult?.dailyUsagePerChargePoint ||
    defaultMockData.dailyUsagePerChargePoint;
  const concurrencyDeviation = concurrencyResult ? concurrencyResult : [];
  const selectOptions = Array.from(
    { length: dailyUsagePerChargePoint.length },
    (_, index) => {
      return {
        value: `${index}`,
        label: `Chargepoint ${index + 1}`,
      };
    }
  );

  return (
    <div
      className={`${
        simulatorResult ? '' : 'blur'
      } visualisation__container flex flex-col gap-4`}
    >
      <Title>Charging values per chargepoint</Title>
      <Select
        label='Select chargepoint'
        options={selectOptions}
        value={selectedValue}
        onChange={setSelectedValue}
      />
      <ValuesPerChargePoint
        data={dailyUsagePerChargePoint}
        selectedValue={selectedValue}
      />
      {!!concurrencyDeviation.length && (
        <>
          <Title>The deviation of the concurrency factor</Title>
          <ConcurrencyDeviation data={concurrencyDeviation} />
        </>
      )}
    </div>
  );
};

export default VisualisationArea;
