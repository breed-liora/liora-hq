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
  AppBar,
  Typography,
  IconButton,
} from '@mui/material';
import {
  CalendarToday,
  People,
  Settings,
  SwapHoriz,
  TimeToLeave,
  AccountCircle,
} from '@mui/icons-material';

import Scheduler from './components/Scheduler';
import ProviderList from './components/ProviderList';
import EmployeeList from './components/EmployeeList';
import ShiftSwapping from './components/ShiftSwapping';
import TimeOffRequests from './components/TimeOffRequests';
import SettingsPage from './components/Settings';

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LioraHQ
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
    </AppBar>
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
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
