// src/components/TimeOffRequests.js
import React, { useState, useEffect } from 'react';
import { getTimeOffRequests, requestTimeOff } from '../../api/api';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from '@mui/material';

function TimeOffRequests() {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    employeeName: '',
    startDate: '',
    endDate: '',
  });

  useEffect(() => {
    const fetchRequests = async () => {
      const response = await getTimeOffRequests();
      setRequests(response.data);
    };
    fetchRequests();
  }, []);

  const handleRequestTimeOff = async () => {
    await requestTimeOff(newRequest);
    // Refresh time-off requests
  };

  return (
    <div>
      <h2>Time-Off Requests</h2>
      <List>
        {requests.map((request) => (
          <ListItem key={request.id}>
            <ListItemText
              primary={`${request.employeeName}`}
              secondary={`From: ${request.startDate} To: ${request.endDate}`}
            />
          </ListItem>
        ))}
      </List>
      <h3>Request Time Off</h3>
      <TextField
        label="Your Name"
        value={newRequest.employeeName}
        onChange={(e) =>
          setNewRequest({ ...newRequest, employeeName: e.target.value })
        }
      />
      <TextField
        label="Start Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={newRequest.startDate}
        onChange={(e) =>
          setNewRequest({ ...newRequest, startDate: e.target.value })
        }
      />
      <TextField
        label="End Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={newRequest.endDate}
        onChange={(e) =>
          setNewRequest({ ...newRequest, endDate: e.target.value })
        }
      />
      <Button variant="contained" onClick={handleRequestTimeOff}>
        Request Time Off
      </Button>
    </div>
  );
}

export default TimeOffRequests;
