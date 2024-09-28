import { useConcurrencyContext } from '../../context/ConcurrencyContext';
import { useSimulationContext } from '../../context/SimulationContext';
import { SimulatorInput } from '../../types/simulator';
import {
  getConcurrencyDeviation,
  simulateCharging,
} from '../../utils/simulateCharging';
import Form from './Form/Form';

const InputArea = () => {
  const { setSimulationResult } = useSimulationContext();
  const { setConcurrencyResult } = useConcurrencyContext();

  const handleSubmit = (formValues: SimulatorInput) => {
    const {
      numberOfChargePoints,
      arrivalProbability,
      consumptionOfCars,
      chargingPowerPerChargePoint,
    } = formValues;
    const simulatorResult = simulateCharging(
      numberOfChargePoints,
      arrivalProbability,
      consumptionOfCars,
      chargingPowerPerChargePoint
    );
    const concurrencyResult = getConcurrencyDeviation(
      numberOfChargePoints,
      arrivalProbability,
      consumptionOfCars,
      chargingPowerPerChargePoint
    );

    setSimulationResult(simulatorResult);
    setConcurrencyResult(concurrencyResult);
  };

  return <Form onSubmit={handleSubmit} />;
};

export default InputArea;
