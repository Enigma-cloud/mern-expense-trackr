import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {

  const [showAdd, setShowAdd] = useState(false);

  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <div className="sub-container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <h3 className="header-span">
                Add new transaction
                <button className="btn inline" 
                  onClick={() => setShowAdd(!showAdd)}>
                  {showAdd ? '∧' : '∨'}
                </button>
            </h3>
          { showAdd && <AddTransaction />}
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;