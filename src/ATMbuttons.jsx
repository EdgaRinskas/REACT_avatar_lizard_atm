import React, { useState } from 'react';

const ATMbuttons = () => {
  const [balance, setBalance] = useState(500);
  const [inputValue, setInputValue] = useState(0); // State to store the input value

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount);
    }
    setInputValue(amount);
  };

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
    setInputValue(amount);
  };

  const handleWithdrawAll = () => {
    setInputValue('Withdraw everything');
    setBalance(0);
  };

  return (
    <div className="ATMbuttons">
      <input
  type="number"
  placeholder="Enter action amount"
  className="input-placeholder"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>
      <div className="withdraw-buttons">
        <button onClick={() => handleWithdraw(10)}>Withdraw 10</button>
        <button onClick={() => handleWithdraw(20)}>Withdraw 20</button>
        <button onClick={() => handleWithdraw(50)}>Withdraw 50</button>
        <button onClick={() => handleWithdraw(100)}>Withdraw 100</button>
      </div>
      <div className="bring-in-buttons">
        <button onClick={() => handleDeposit(10)}>Bring in 10</button>
        <button onClick={() => handleDeposit(20)}>Bring in 20</button>
        <button onClick={() => handleDeposit(50)}>Bring in 50</button>
        <button onClick={() => handleDeposit(100)}>Bring in 100 euros</button>
      </div>
      <button className="withdraw-everything" onClick={handleWithdrawAll}>
        Withdraw everything
      </button>
      

      <p>Balance: {balance} euros</p>
    </div>
  );
};

export default ATMbuttons;
