import React, { useState } from 'react';

const Settings = () => {
  const [minFD, setMinFD] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const settings = { minFD };
    localStorage.setItem('settings', JSON.stringify(settings));
    setMinFD(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Min Front Desk Staff" value={minFD} onChange={(e) => setMinFD(e.target.value)} />
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default Settings;
