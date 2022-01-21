
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {

  const saveToLocalStorage = (items) => {
    localStorage.setItem('expense-tracker', JSON.stringify(items))
}


  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction storage={saveToLocalStorage}/>
      </div>
    </GlobalProvider>
  );
}


export default App;
