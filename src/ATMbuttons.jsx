// ATMbuttons.jsx
import React, { useState } from 'react';

const ATMbuttons = () => {
  const [balance, setBalance] = useState(500);

  const withdraw = (amount) => {
    setBalance(balance - amount);
  };

  const deposit = (amount) => {
    setBalance(balance + amount);
  };

  const withdrawEverything = () => {
    setBalance(0);
  };

  return (
    <div className="atm-buttons">
      <button onClick={() => withdraw(10)}>Withdraw 10</button>
      <button onClick={() => withdraw(20)}>Withdraw 20</button>
      <button onClick={() => withdraw(50)}>Withdraw 50</button>
      <button onClick={() => withdraw(100)}>Withdraw 100</button>
      <button onClick={withdrawEverything}>Withdraw everything</button>
      <button onClick={() => deposit(10)}>Bring in 10</button>
      <button onClick={() => deposit(20)}>Bring in 20</button>
      <button onClick={() => deposit(50)}>Bring in 50</button>
      <button onClick={() => deposit(100)}>Bring in 100 euros</button>
    </div>
  );
};

export default ATMbuttons;
