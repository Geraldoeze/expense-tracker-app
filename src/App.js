
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';



function App() {
  
  const saveToLocal = (item) => {
    
    localStorage.setItem('expenses', JSON.stringify(item))
  }
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction storage={saveToLocal}/>
      </div>
    </GlobalProvider>
  );
}


export default App;
