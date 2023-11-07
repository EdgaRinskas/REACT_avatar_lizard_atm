// Results.jsx
import React from 'react';

const Results = ({ name }) => {
  return (
    <div className="results">
      <div className="ellipse">{name.charAt(0)}</div>
      <div className="ellipse">{name.charAt(1)}</div>
      <div className="ellipse">{name.charAt(2)}</div>
    </div>
  );
};

export default Results;
