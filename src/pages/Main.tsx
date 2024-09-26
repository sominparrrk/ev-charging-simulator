import InputData from '../containers/InputArea/InputArea';
import OutputArea from '../containers/OutputArea/OutputArea';
import Visualisation from '../containers/Visualisation/Visualisation';

const Main = () => {
  return (
    <div>
      <div className='main__header w-screen p-4 bg-black'>
        <h1 className='text-3xl font-bold text-green-300'>
          EV Charging Simulator
        </h1>
      </div>
      <div className='main__container flex flex-row'>
        <div className='data__container flex flex-col'>
          <InputData />
          <OutputArea />
        </div>
        <Visualisation />
      </div>
    </div>
  );
};

export default Main;
