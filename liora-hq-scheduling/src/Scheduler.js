import React from 'react';

const Scheduler = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const storedSchedule = JSON.parse(localStorage.getItem('schedule')) || [];
    setSchedule(storedSchedule);
  }, []);

  return (
    <div>
      <h2>Schedule</h2>
      {schedule.map((entry, index) => (
        <div key={index}>
          <p>Employee: {entry.employee}</p>
          <p>Provider: {entry.provider}</p>
          <p>Date: {entry.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Scheduler;
