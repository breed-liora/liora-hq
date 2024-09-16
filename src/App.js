// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Toolbar,
} from '@mui/material';
import {
  CalendarToday,
  People,
  Settings,
  SwapHoriz,
  TimeToLeave,
  Assessment,
} from '@mui/icons-material';

import Scheduler from './components/Scheduler';
import ProviderList from './components/ProviderList';
import EmployeeList from './components/EmployeeList';
import ShiftSwapping from './components/ShiftSwapping';
import TimeOffRequests from './components/TimeOffRequests';
import Reports from './components/Reports';
import SettingsPage from './components/Settings';

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <CssBaseline />
      <div style={{ display: 'flex' }}>
        {/* Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <List>
            <ListItem button component="a" href="/">
              <ListItemIcon>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText primary="Scheduler" />
            </ListItem>
            <ListItem button component="a" href="/providers">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Providers" />
            </ListItem>
            <ListItem button component="a" href="/employees">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItem>
            <ListItem button component="a" href="/shift-swapping">
              <ListItemIcon>
                <SwapHoriz />
              </ListItemIcon>
              <ListItemText primary="Shift Swapping" />
            </ListItem>
            <ListItem button component="a" href="/time-off-requests">
              <ListItemIcon>
                <TimeToLeave />
              </ListItemIcon>
              <ListItemText primary="Time-Off Requests" />
            </ListItem>
            <ListItem button component="a" href="/reports">
              <ListItemIcon>
                <Assessment />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button component="a" href="/settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <main style={{ flexGrow: 1, padding: '16px' }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Scheduler />} />
            <Route path="/providers" element={<ProviderList />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/shift-swapping" element={<ShiftSwapping />} />
            <Route path="/time-off-requests" element={<TimeOffRequests />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
