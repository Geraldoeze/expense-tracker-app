import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';


export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    const [ list, setList] = useState(transactions);

    useEffect(() => {
        const expenseList = JSON.parse(localStorage.getItem('expense-tracker'));
        setList(expenseList)
      }, [])
    console.log(list)

    return (
        <div>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactions.map((tran) => (
                    <Transaction key={tran.id} trans={tran} />
                ))}
            </ul>
        </div>
    )
}