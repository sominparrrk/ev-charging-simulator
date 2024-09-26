import { SimulationProvider } from './context/SimulationContext';
import Main from './pages/Main';

function App() {
  return (
    <div className='App'>
      <SimulationProvider>
        <Main />
      </SimulationProvider>
    </div>
  );
}

export default App;
