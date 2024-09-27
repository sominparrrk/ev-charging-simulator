import { useEffect, useState } from 'react';
import Select from '../../components/Select/Select';
import { useSimulationContext } from '../../context/SimulationContext';
import Chart from './Chart/Chart';

const VisualisationArea = () => {
  const { result } = useSimulationContext();
  const [selectedValue, setSelectedValue] = useState('0');
  const dailyUsagePerChargePoint = result?.dailyUsagePerChargePoint || [];
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
    <div className='visualisation__container'>
      {result && (
        <>
          <Select
            label='Select chargepoint'
            options={selectOptions}
            value={selectedValue}
            onChange={setSelectedValue}
          />
          <Chart
            data={dailyUsagePerChargePoint}
            selectedValue={selectedValue}
          />
        </>
      )}
    </div>
  );
};

export default VisualisationArea;
