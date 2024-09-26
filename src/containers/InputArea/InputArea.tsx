import { useSimulationContext } from '../../context/SimulationContext';
import { SimulatorInput } from '../../types/simulator';
import { simulateCharging } from '../../utils/simulateCharging';
import Form from './Form/Form';

const InputArea = () => {
  const { setSimulationResult } = useSimulationContext();

  const handleSubmit = (formValues: SimulatorInput) => {
    const {
      numberOfChargePoints,
      arrivalProbability,
      consumptionOfCars,
      chargingPowerPerChargePoint,
    } = formValues;
    const result = simulateCharging(
      numberOfChargePoints,
      arrivalProbability,
      consumptionOfCars,
      chargingPowerPerChargePoint
    );

    setSimulationResult(result);
  };

  return <Form onSubmit={handleSubmit} />;
};

export default InputArea;
