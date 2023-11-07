import React from 'react';
import ATM from './ATM';

const HeaderThree = () => {
  return (
    <div className="HeaderThree">
      <button>Task nr. 3</button>
      <h2>React.Js karkasas</h2>
      <div className="Logo">
        <a href="https://images.app.goo.gl/zYqyuznkszt7s37WA" target="_blank" rel="noopener noreferrer">
          <img src="https://images.app.goo.gl/zYqyuznkszt7s37WA" alt="Logo" width="200" />
        </a>
      </div>
    </div>
  );
};

const Content3 = () => {
  return (
    <div className="container-3">
      <HeaderThree />
      <ATM />
    </div>
  );
};

export default Content3;
