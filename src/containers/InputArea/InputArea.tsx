import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

const InputArea = () => {
  const handleChange = () => {
    console.log('value change');
  };

  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div className='input-area__container'>
      <Input label='Number of charge points' onChange={handleChange} />
      <Input label='Arrival probability' onChange={handleChange} />
      <Input label='Consumption of cars' onChange={handleChange} />
      <Input label='Charging power / charge points' onChange={handleChange} />
      <Button
        className='bg-gray-300 hover:bg-gray-600'
        label='Cancel'
        onClick={handleClick}
      />
      <Button
        className='bg-green-400 hover:bg-green-600'
        label='Simulate'
        onClick={handleClick}
      />
    </div>
  );
};

export default InputArea;
