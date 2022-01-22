import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = ({storage}) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const  { addTransaction, transactions } = useContext(GlobalContext);
   
  
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: Number(amount)
        }
      
        addTransaction(newTransaction);
        const same = [...transactions, newTransaction]
        storage(same)
    }

    return(

        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input value={text} type='text'     
                        onChange={(e)=> setText(e.target.value)} 
                        placeholder='Enter text...' />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Amount 
                        <br />
                        (negative - expense, positive - income)
                        </label>
                    <input type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                         placeholder='Enter amount...' />   
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}