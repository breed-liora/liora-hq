import React, { useState, useEffect } from 'react';
import './ProviderModal.css';

const ProviderModal = ({ provider, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(8);

  useEffect(() => {
    if (provider) {
      setName(provider.name);
      setRole(provider.role);
      setDaysPerWeek(provider.daysPerWeek);
      setHoursPerDay(provider.hoursPerDay);
    }
  }, [provider]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, role, daysPerWeek, hoursPerDay });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{provider ? 'Edit Provider' : 'Add New Provider'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Days per Week"
            value={daysPerWeek}
            onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
            min="1"
            max="7"
            required
          />
          <input
            type="number"
            placeholder="Hours per Day"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
            min="1"
            max="24"
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ProviderModal;
