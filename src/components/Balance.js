import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    function getSum(arr) {
        let amountsArr = arr.map(item => item.amount);
        let sum = amountsArr.reduce((total, num) => {return total + num}, 0).toFixed(2);

        return sum
    }

    return (
        <>
           <h4>Your Balance</h4>
           <h1>£{transactions ? getSum(transactions) : "0.00"}</h1> 
        </>
    )
}

export default Balance
