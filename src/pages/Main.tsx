import InputData from '../containers/InputArea/InputArea';
import OutputArea from '../containers/OutputArea/OutputArea';
import VisualisationArea from '../containers/VisualisationArea/VisualisationArea';

const Main = () => {
  return (
    <div>
      <div className='main__header w-screen p-4 bg-black'>
        <h1 className='text-3xl font-semibold text-green-300'>
          EV Charging Simulator
        </h1>
      </div>
      <div className='main__container flex flex-col gap-16 py-12 px-8'>
        <div className='data__container flex flex-col gap-16 lg:flex-row justify-between'>
          <InputData />
          <OutputArea />
        </div>
        <VisualisationArea />
      </div>
    </div>
  );
};

export default Main;
