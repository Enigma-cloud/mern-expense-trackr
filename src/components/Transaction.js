import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
    
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-': '+';
    const colHighlight = transaction.amount < 0 ? "minus" : "plus";
    const absAmount = Math.abs(transaction.amount);

    return (
        <li className={colHighlight}>
            {transaction.text}
            <span>{sign}£{absAmount}</span>
            <button className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
            >X
            </button>
        </li>
    )
}

export default Transaction
