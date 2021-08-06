import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    const transactionsSum = getSum(transactions);

    function getSum(arr) {
        let amountsArr = arr.map(item => item.amount);
        let sum = amountsArr.reduce((total, num) => {return total + num}, 0).toFixed(2);

        return sum
    }

    return (
        <>
           <h4>Your Balance</h4>
           <h1>£{transactions ? numberWithCommas(transactionsSum) : "0.00"}</h1> 
        </>
    )
}

export default Balance
