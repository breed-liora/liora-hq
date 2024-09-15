import React, { useState, useEffect } from 'react';
import './ProviderList.css';
import ProviderModal from './ProviderModal';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProvider, setEditingProvider] = useState(null);

  useEffect(() => {
    const storedProviders = JSON.parse(localStorage.getItem('providers')) || [
      {
        name: 'Dr. Reed',
        role: 'Dermatologist',
        maxHours: 40,
        schedule: {
          monday: { start: '09:00', end: '17:00', hours: 8 },
          tuesday: { start: '09:00', end: '17:00', hours: 8 },
          wednesday: { start: '09:00', end: '17:00', hours: 8 },
          thursday: { start: '09:00', end: '17:00', hours: 8 },
          friday: { start: '09:00', end: '17:00', hours: 8 },
          saturday: { start: '', end: '', hours: 0 },
          sunday: { start: '', end: '', hours: 0 },
        }
      }
    ];
    setProviders(storedProviders);
  }, []);

  const handleAddProvider = (newProvider) => {
    const updatedProviders = [...providers, newProvider];
    setProviders(updatedProviders);
    localStorage.setItem('providers', JSON.stringify(updatedProviders));
    setIsModalOpen(false);
  };

  const handleEditProvider = (editedProvider) => {
    const updatedProviders = providers.map(provider => 
      provider.name === editingProvider.name ? editedProvider : provider
    );
    setProviders(updatedProviders);
    localStorage.setItem('providers', JSON.stringify(updatedProviders));
    setIsModalOpen(false);
    setEditingProvider(null);
  };

  const handleDeleteProvider = (providerToDelete) => {
    const updatedProviders = providers.filter(provider => provider.name !== providerToDelete.name);
    setProviders(updatedProviders);
    localStorage.setItem('providers', JSON.stringify(updatedProviders));
  };

  const calculateTotalHours = (schedule) => {
    return Object.values(schedule).reduce((total, day) => total + day.hours, 0);
  };

  return (
    <div className="provider-list">
      <h2>Providers</h2>
      <button onClick={() => setIsModalOpen(true)} className="add-button">Add New Provider</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Max Hours</th>
            <th>Total Scheduled Hours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider, index) => (
            <tr key={index}>
              <td>{provider.name}</td>
              <td>{provider.role}</td>
              <td>{provider.maxHours}</td>
              <td>{calculateTotalHours(provider.schedule)}</td>
              <td>
                <button onClick={() => { setEditingProvider(provider); setIsModalOpen(true); }}>Edit</button>
                <button onClick={() => handleDeleteProvider(provider)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <ProviderModal
          provider={editingProvider}
          onSave={editingProvider ? handleEditProvider : handleAddProvider}
          onClose={() => { setIsModalOpen(false); setEditingProvider(null); }}
        />
      )}
    </div>
  );
};

export default ProviderList;
