import React, { useState } from 'react';
import Avatar from './Avatar';

const UserInput = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <div>
      <h2>User Input</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Surname:</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="avatar-container">
        <Avatar name={name} surname={surname} />
        <Avatar name={name} surname={surname} />
      </div>
    </div>
  );
};

export default UserInput;
