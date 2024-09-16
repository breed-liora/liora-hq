// src/components/ProviderList.js
import React, { useState, useEffect } from 'react';
import { getProviders } from '../api/api';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';

function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [open, setOpen] = useState(false);
  const [newProvider, setNewProvider] = useState({
    name: '',
    minHours: '',
    maxHours: '',
    maNeeded: '',
    fdNeeded: '',
  });

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response.data);
    };
    fetchProviders();
  }, []);

  const handleAddProvider = async () => {
    // Implement addProvider API call
    // Refresh the provider list
    setOpen(false);
  };

  return (
    <div>
      <h2>Providers</h2>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Provider
      </Button>
      <List>
        {providers.map((provider) => (
          <ListItem key={provider.id}>
            <ListItemText
              primary={provider.name}
              secondary={`Min Hours: ${provider.minHours}, Max Hours: ${provider.maxHours}`}
            />
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Provider</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={newProvider.name}
            onChange={(e) =>
              setNewProvider({ ...newProvider, name: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Min Hours"
            type="number"
            value={newProvider.minHours}
            onChange={(e) =>
              setNewProvider({ ...newProvider, minHours: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="Max Hours"
            type="number"
            value={newProvider.maxHours}
            onChange={(e) =>
              setNewProvider({ ...newProvider, maxHours: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="MAs Needed"
            type="number"
            value={newProvider.maNeeded}
            onChange={(e) =>
              setNewProvider({ ...newProvider, maNeeded: e.target.value })
            }
            fullWidth
          />
          <TextField
            label="FDs Needed"
            type="number"
            value={newProvider.fdNeeded}
            onChange={(e) =>
              setNewProvider({ ...newProvider, fdNeeded: e.target.value })
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddProvider} color="primary">
            Add
          </Button>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProviderList;
