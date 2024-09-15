import React, { useState, useEffect } from 'react';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const storedProviders = JSON.parse(localStorage.getItem('providers')) || [];
    setProviders(storedProviders);
  }, []);

  return (
    <div>
      <h2>Providers</h2>
      {providers.map((provider, index) => (
        <div key={index}>
          <p>Name: {provider.name}</p>
          <p>Role: {provider.role}</p>
          <p>Min Hours: {provider.minHours}</p>
          <p>Max Hours: {provider.maxHours}</p>
        </div>
      ))}
    </div>
  );
};

export default ProviderList;
