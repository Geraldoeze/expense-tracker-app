import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';



// useEffect(() => {
//     const expenseList = JSON.parse(localStorage.getItem('expense-tracker'));
//     setList([...expenseList])
//   }, [])


//Initial State
const InitialState = {
    transactions: []
}


//Create Context
export const GlobalContext = createContext(InitialState);

//Provider component
export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);


    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions, deleteTransaction, addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}