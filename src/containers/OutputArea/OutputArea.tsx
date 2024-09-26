import { useSimulationContext } from '../../context/SimulationContext';

const OutputArea = () => {
  const { result } = useSimulationContext();
  return (
    <div className='output-area__container'>
      output area {result?.actualMaxPowerDemand}
    </div>
  );
};

export default OutputArea;
