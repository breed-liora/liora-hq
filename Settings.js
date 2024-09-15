import React, { useState } from 'react';

const Settings = () => {
  const [minFD, setMinFD] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Min Front Desk Staff" value={minFD} onChange={(e) => setMinFD(e.target.value)} />
      <button type="submit">Save Settings</button>
    </form>
  );
};

export default Settings;
