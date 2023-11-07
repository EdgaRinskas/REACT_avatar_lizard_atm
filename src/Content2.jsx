import React, { useState } from 'react';
import Avatar from './Avatar';

const Content2 = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <div className="content2">
      <h1>Task nr. 2</h1>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className="avatar">
        <Avatar name={name} surname={surname} />
        <Avatar name={name} surname={surname} />
      </div>
    </div>
  );
};

export default Content2;
