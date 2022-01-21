
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from './context/GlobalState';




function App() {
  const { transactions } = useContext(GlobalContext);

  const [ expense, setExpense ] = useState();

  useEffect(()=> {
    const expenseItems = JSON.parse(localStorage.getItem('expense-tracker'));
    setExpense(expenseItems)
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('expense-tracker', JSON.stringify(items))
}
  saveToLocalStorage(transactions);

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
