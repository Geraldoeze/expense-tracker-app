import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const getExpense = () => {
    const localData = localStorage.getItem('expenses');
    return localData ? JSON.parse(localData) : []
}


//Initial State
const InitialState = {
    transactions: getExpense()
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