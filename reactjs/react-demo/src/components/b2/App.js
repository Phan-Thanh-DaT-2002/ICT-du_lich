import React, { useState } from 'react';
import UserForm from './UserForm';
import Greeting from './Greeting';

function App() {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <UserForm onChange={handleNameChange} />
      <Greeting name={name} />
    </div>
  );
}

export default App;
