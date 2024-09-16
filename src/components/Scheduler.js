// src/components/Scheduler.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getSchedule } from '../api/api';

const localizer = momentLocalizer(moment);

function Scheduler() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      // Use mock data for now
      const response = await getSchedule();
      const events = response.data.map((item) => ({
        title: `${item.employeeName} (${item.role})`,
        start: new Date(item.startTime),
        end: new Date(item.endTime),
      }));
      setEvents(events);
    };
    fetchSchedule();
  }, []);

  return (
    <div>
      <h2>Scheduler</h2>
      <Calendar
        localizer={localizer}
        events={events}
        views={['week', 'day', 'agenda']}
        defaultView="week"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
      />
    </div>
  );
}

export default Scheduler;
