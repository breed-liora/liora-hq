import React, { useState } from 'react';

const AddProvider = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [minHours, setMinHours] = useState(0);
  const [maxHours, setMaxHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const provider = { name, role, minHours, maxHours };
    const providers = JSON.parse(localStorage.getItem('providers')) || [];
    providers.push(provider);
    localStorage.setItem('providers', JSON.stringify(providers));
    setName('');
    setRole('');
    setMinHours(0);
    setMaxHours(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
      <input type="number" placeholder="Min Hours" value={minHours} onChange={(e) => setMinHours(e.target.value)} />
      <input type="number" placeholder="Max Hours" value={maxHours} onChange={(e) => setMaxHours(e.target.value)} />
      <button type="submit">Add Provider</button>
    </form>
  );
};

export default AddProvider;
