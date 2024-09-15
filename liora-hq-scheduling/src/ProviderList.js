import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProviderList.css';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const storedProviders = JSON.parse(localStorage.getItem('providers')) || [
      { name: 'Dr. Reed', role: 'Dermatologist', minHours: 30, maxHours: 40 }
    ];
    setProviders(storedProviders);
  }, []);

  return (
    <div className="provider-list">
      <h2>Providers</h2>
      <Link to="/providers/add" className="add-button">Add New Provider</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Min Hours</th>
            <th>Max Hours</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider, index) => (
            <tr key={index}>
              <td>{provider.name}</td>
              <td>{provider.role}</td>
              <td>{provider.minHours}</td>
              <td>{provider.maxHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProviderList;
