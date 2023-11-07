// Content1.jsx
import React from 'react';
import Card from './Card';

const Content1 = () => {
  return (
    <div className="content">
      <div className="textBox">
        <h3>Some text about the tasks that must be performed.</h3>
      </div>
      <div className="lizard">
        <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-77632-800.jpg" alt="Lizard" />
      </div>
      <div className="description">
        <h3>Lizard</h3>
        <p>
          Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging
          across all continents except Antarctica, as well as most oceanic island chains.
        </p>
      </div>
    </div>
  );
};

export default Content1;
