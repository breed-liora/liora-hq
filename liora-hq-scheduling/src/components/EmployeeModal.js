import React, { useState, useEffect } from 'react';
import './EmployeeModal.css';

const EmployeeModal = ({ employee, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [minHours, setMinHours] = useState(0);
  const [maxHours, setMaxHours] = useState(0);

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setRole(employee.role);
      setMinHours(employee.minHours);
      setMaxHours(employee.maxHours);
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, role, minHours, maxHours });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{employee ? 'Edit Employee' : 'Add New Employee'}</h2>
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
            placeholder="Min Hours"
            value={minHours}
            onChange={(e) => setMinHours(parseInt(e.target.value))}
            min="0"
            required
          />
          <input
            type="number"
            placeholder="Max Hours"
            value={maxHours}
            onChange={(e) => setMaxHours(parseInt(e.target.value))}
            min="0"
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
