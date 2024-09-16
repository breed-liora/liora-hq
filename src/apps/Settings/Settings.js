import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import EmployeeList from './EmployeeList';
import ProviderList from './ProviderList';
import SettingsPage from './SettingsPage';

function Settings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h2>Settings</h2>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="settings tabs">
          <Tab label="Employees" />
          <Tab label="Providers" />
          <Tab label="General Settings" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {value === 0 && <EmployeeList />}
        {value === 1 && <ProviderList />}
        {value === 2 && <SettingsPage />}
      </Box>
    </div>
  );
}

export default Settings;
