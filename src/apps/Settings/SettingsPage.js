// src/components/Settings.js
import React, { useState, useEffect } from 'react';
import { getSettings, updateSettings } from '../../api/api';
import { TextField, Button } from '@mui/material';

function SettingsPage() {
  const [settings, setSettings] = useState({
    minFrontDesk: '',
    // Add other settings as needed
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const response = await getSettings();
      setSettings(response.data);
    };
    fetchSettings();
  }, []);

  const handleUpdateSettings = async () => {
    await updateSettings(settings);
    // Optionally show a success message
  };

  return (
    <div>
      <h2>Settings</h2>
      <TextField
        label="Minimum Front Desk Staff"
        type="number"
        value={settings.minFrontDesk}
        onChange={(e) =>
          setSettings({ ...settings, minFrontDesk: e.target.value })
        }
        fullWidth
      />
      {/* Add more settings fields as needed */}
      <Button variant="contained" onClick={handleUpdateSettings}>
        Update Settings
      </Button>
    </div>
  );
}

export default SettingsPage;
