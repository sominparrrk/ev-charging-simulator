import { ConcurrencyProvider } from './context/ConcurrencyContext';
import { SimulationProvider } from './context/SimulationContext';
import Main from './pages/Main';

function App() {
  return (
    <div className='App'>
      <SimulationProvider>
        <ConcurrencyProvider>
          <Main />
        </ConcurrencyProvider>
      </SimulationProvider>
    </div>
  );
}

export default App;
