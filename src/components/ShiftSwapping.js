// src/components/ShiftSwapping.js
import React, { useState, useEffect } from 'react';
import { getShiftSwaps, requestShiftSwap } from '../api/api';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
} from '@mui/material';

function ShiftSwapping() {
  const [shiftSwaps, setShiftSwaps] = useState([]);
  const [newSwap, setNewSwap] = useState({ shiftId: '', requestedBy: '' });

  useEffect(() => {
    const fetchShiftSwaps = async () => {
      const response = await getShiftSwaps();
      setShiftSwaps(response.data);
    };
    fetchShiftSwaps();
  }, []);

  const handleRequestSwap = async () => {
    await requestShiftSwap(newSwap);
    // Refresh shift swaps
  };

  return (
    <div>
      <h2>Shift Swapping</h2>
      <List>
        {shiftSwaps.map((swap) => (
          <ListItem key={swap.id}>
            <ListItemText
              primary={`Shift ID: ${swap.shiftId}`}
              secondary={`Requested By: ${swap.requestedBy}`}
            />
          </ListItem>
        ))}
      </List>
      <h3>Request a Shift Swap</h3>
      <TextField
        label="Shift ID"
        value={newSwap.shiftId}
        onChange={(e) => setNewSwap({ ...newSwap, shiftId: e.target.value })}
      />
      <TextField
        label="Your Name"
        value={newSwap.requestedBy}
        onChange={(e) =>
          setNewSwap({ ...newSwap, requestedBy: e.target.value })
        }
      />
      <Button variant="contained" onClick={handleRequestSwap}>
        Request Swap
      </Button>
    </div>
  );
}

export default ShiftSwapping;
