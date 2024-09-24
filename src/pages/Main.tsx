import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const Main = () => {
  return (
    <div>
      <div className='main__header w-screen p-4 bg-black'>
        <h1 className='text-3xl font-bold text-green-300'>EV Charging Simulator</h1>
      </div>
      <Button label='button' onClick={() => console.log('click')} />
      <Input label='input' onChange={() => console.log('change')} />
    </div>
  );
};

export default Main;
