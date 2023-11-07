// App.js
import React from 'react';
import './App.css';
import HeaderOne from './HeaderOne';
import Content1 from './Content1';
import Content3 from './Content3';
import HeaderTwo from './HeaderTwo';
import Results from './Results';
import HeaderThree from './HeaderThree';
import ATM from './ATM';
import UserInput from './UserInput';
import Avatar from './Avatar';
import Content4Fetch from './Content4Fetch';
import HeaderFour from './HeaderFour';

function App() {
  return (
    <div className="App">
      <div className="container-1">
        <HeaderOne />
        <Content1 />
      </div>
      <div className="container-2">
        <HeaderTwo />
        <Results name="Giselle D'ark" />
      </div>
      <div className="container-3">
        <HeaderThree />
        <ATM />
      </div>
      <div className="container-4">
        <HeaderFour />
        <Content4Fetch />
      </div>
    </div>
  );
}

export default App;
