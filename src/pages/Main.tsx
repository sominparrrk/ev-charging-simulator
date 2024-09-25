import InputData from '../containers/InputData/InputData';
import OutputData from '../containers/OutputData/OutputData';
import Visualisation from '../containers/Visualisation/Visualisation';

const Main = () => {
  return (
    <div>
      <div className='main__header w-screen p-4 bg-black'>
        <h1 className='text-3xl font-bold text-green-300'>EV Charging Simulator</h1>
      </div>
      <div className='main__container flex flex-row'>
        <div className='data__container flex flex-col'>
          <InputData />
          <OutputData />
        </div>
        <Visualisation />
      </div>
    </div>
  );
};

export default Main;
