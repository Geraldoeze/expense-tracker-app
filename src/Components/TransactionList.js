import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';


export const TransactionList = ({storage}) => {
    const { transactions } = useContext(GlobalContext);
        
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