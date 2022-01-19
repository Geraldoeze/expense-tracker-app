
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
