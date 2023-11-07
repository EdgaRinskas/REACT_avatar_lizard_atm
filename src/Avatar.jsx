// Avatar.jsx
import React, { useState } from 'react';

const Avatar = ({ name }) => {
  return (
    <div className="avatar">
      <h2>{name}</h2>
    </div>
  );
};

export default Avatar;
