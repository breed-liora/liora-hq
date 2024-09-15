import React, { useState, useEffect } from 'react';
import './ProviderModal.css';
import React, { useState, useEffect } from 'react';

const ProviderModal = ({ provider, onSave, onClose }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [maxHours, setMaxHours] = useState(40);
  const [schedule, setSchedule] = useState({
    monday: { start: '', end: '', hours: 0 },
    tuesday: { start: '', end: '', hours: 0 },
    wednesday: { start: '', end: '', hours: 0 },
    thursday: { start: '', end: '', hours: 0 },
    friday: { start: '', end: '', hours: 0 },
    saturday: { start: '', end: '', hours: 0 },
    sunday: { start: '', end: '', hours: 0 },
  });

  useEffect(() => {
    if (provider) {
      setName(provider.name);
      setRole(provider.role);
      setMaxHours(provider.maxHours);
      setSchedule(provider.schedule || schedule);
    }
  }, [provider]);

  const handleScheduleChange = (day, field, value) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [field]: value,
        hours: field === 'hours' ? value : prevSchedule[day].hours,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, role, maxHours, schedule });
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
            placeholder="Max Hours per Week"
            value={maxHours}
            onChange={(e) => setMaxHours(parseInt(e.target.value))}
            min="1"
            max="168"
            required
          />
          {Object.entries(schedule).map(([day, { start, end, hours }]) => (
            <div key={day} className="day-schedule">
              <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
              <input
                type="time"
                step="900" // 900 seconds = 15 minutes
                value={start}
                onChange={(e) => handleScheduleChange(day, 'start', e.target.value)}
              />
              <input
                type="time"
                step="900" // 900 seconds = 15 minutes
                value={end}
                onChange={(e) => handleScheduleChange(day, 'end', e.target.value)}
              />
              <input
                type="number"
                placeholder="Hours"
                value={hours}
                onChange={(e) => handleScheduleChange(day, 'hours', parseInt(e.target.value))}
                min="0"
                max="24"
              />
            </div>
          ))}
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default ProviderModal;
