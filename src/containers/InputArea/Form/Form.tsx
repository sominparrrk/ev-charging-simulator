import React, { ReactNode, useState } from 'react';
import Button from '../../../components/Button/Button';
import NumberInput from '../../../components/NumberInput/NumberInput';
import { SimulatorInput } from '../../../types/simulator';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

interface FormProps {
  onSubmit: (formValues: SimulatorInput) => void;
}

interface ComponentProps {
  children: ReactNode;
}

const InputWrapper: React.FC<ComponentProps> = ({ children }) => {
  return <div className='flex flex-col gap-1'>{children}</div>;
};

const Form = ({ onSubmit }: FormProps) => {
  const [formValues, setFormValues] = useState({
    numberOfChargePoints: 20,
    arrivalProbability: 100,
    consumptionOfCars: 18,
    chargingPowerPerChargePoint: 11,
  });

  const [errorMessages, setErrorMessages] = useState({
    numberOfChargePoints: '',
    arrivalProbability: '',
    consumptionOfCars: '',
    chargingPowerPerChargePoint: '',
  });

  const validateInput = (name: string, value: number) => {
    switch (name) {
      case 'numberOfChargePoints':
        if (value < 1) {
          return 'Number of charge points should be at least 1';
        }
        break;
      case 'arrivalProbability':
        if (value < 20 || value > 100) {
          return 'Arrival probability multiplier should be 20 - 100';
        }
        break;
      case 'consumptionOfCars':
        if (value < 1) {
          return 'Consumption of cars should be at least 1';
        }
        break;
      case 'chargingPowerPerChargePoint':
        if (value < 1) {
          return 'Charging power per charge point should be at least 1';
        }
        break;
      default:
        break;
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numberValue = Number(value);
    const errorMessage = validateInput(name, numberValue);

    if (isNaN(numberValue)) {
      setErrorMessages((prev) => ({
        ...prev,
        [name]: 'Type only number in this field',
      }));

      setFormValues((prev) => ({
        ...prev,
        [name]: 1,
      }));
    } else {
      setErrorMessages({
        ...errorMessages,
        [name]: errorMessage,
      });

      setFormValues({
        ...formValues,
        [name]: numberValue,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(errorMessages).every((msg) => msg === '')) {
      onSubmit(formValues);
    }
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormValues({
      numberOfChargePoints: 20,
      arrivalProbability: 100,
      consumptionOfCars: 18,
      chargingPowerPerChargePoint: 11,
    });
    setErrorMessages({
      numberOfChargePoints: '',
      arrivalProbability: '',
      consumptionOfCars: '',
      chargingPowerPerChargePoint: '',
    });
  };

  return (
    <form className='form__container w-full' onSubmit={handleSubmit}>
      <div className='input-container flex justify-center grid lg:grid-rows-2 lg:grid-cols-2 gap-4'>
        <InputWrapper>
          <NumberInput
            label='Number of charge points'
            name='numberOfChargePoints'
            value={formValues.numberOfChargePoints}
            onChange={handleChange}
            min={1}
            isError={!!errorMessages.numberOfChargePoints}
          />
          {errorMessages.numberOfChargePoints && (
            <ErrorMessage>{errorMessages.numberOfChargePoints}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <NumberInput
            label='Arrival probability multiplier'
            name='arrivalProbability'
            value={formValues.arrivalProbability}
            onChange={handleChange}
            min={20}
            max={100}
            unit='%'
            isError={!!errorMessages.arrivalProbability}
          />
          {errorMessages.arrivalProbability && (
            <ErrorMessage>{errorMessages.arrivalProbability}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <NumberInput
            label='Consumption of cars'
            name='consumptionOfCars'
            value={formValues.consumptionOfCars}
            onChange={handleChange}
            min={1}
            unit='kWh'
            isError={!!errorMessages.consumptionOfCars}
          />
          {errorMessages.consumptionOfCars && (
            <ErrorMessage>{errorMessages.consumptionOfCars}</ErrorMessage>
          )}
        </InputWrapper>
        <InputWrapper>
          <NumberInput
            label='Charging power / charge points'
            name='chargingPowerPerChargePoint'
            value={formValues.chargingPowerPerChargePoint}
            onChange={handleChange}
            min={1}
            unit='kW'
            isError={!!errorMessages.chargingPowerPerChargePoint}
          />
          {errorMessages.chargingPowerPerChargePoint && (
            <ErrorMessage>
              {errorMessages.chargingPowerPerChargePoint}
            </ErrorMessage>
          )}
        </InputWrapper>
      </div>
      <div className='button-group mt-8 flex gap-4 justify-center'>
        <Button
          className='bg-gray-300 hover:bg-gray-600'
          label='Reset'
          onClick={handleCancel}
          type='button'
        />
        <Button
          className='bg-green-400 hover:bg-green-600'
          label='Simulate'
          type='submit'
        />
      </div>
    </form>
  );
};

export default Form;
