// Card.jsx
import React from 'react';

const Card = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default Card;
