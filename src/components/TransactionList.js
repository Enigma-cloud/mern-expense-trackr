import React, { useContext } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className={`list ${transactions.length === 0 ? 'no-scroll' : ''}`}>
                { transactions.length !== 0 ? 
                    transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    )) 
                : 'No transactions to show'}
            </ul>
        </>
    )
}

export default TransactionList
