import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';



const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    // Calculate Totals
    function getIncome(arr) {
        let amountsArr = arr.map(item => item.amount);
        let incomeArr = amountsArr.filter(amount => amount > 0);
        let netIncome = incomeArr.reduce((total, num) => {return total + num}, 0).toFixed(2);

        return netIncome
    }
    function getExpense(arr) {
        let amountsArr = arr.map(item => item.amount);
        let expenseArr = amountsArr.filter(amount => amount < 0);
        let netExpense = expenseArr.reduce((total, num) => {return total + num}, 0).toFixed(2);
        
        return netExpense
    }

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{getIncome(transactions)}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">{getExpense(transactions)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
