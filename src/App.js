// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  Button,
  Collapse,
} from '@mui/material';
import {
  CalendarToday,
  Settings,
  SwapHoriz,
  TimeToLeave,
  AccountCircle,
  BarChart,
  TrendingUp,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';

import Scheduler from './apps/Scheduler/Scheduler';
import ShiftSwapping from './apps/Scheduler/ShiftSwapping';
import TimeOffRequests from './apps/Scheduler/TimeOffRequests';
import MarketingApp from './apps/Marketing/Marketing';
import FinanceApp from './apps/Finance/Finance';
import SettingsApp from './apps/Settings/Settings';

const drawerWidth = 240;

function App() {
  const [schedulerOpen, setSchedulerOpen] = useState(false);

  const handleSchedulerClick = () => {
    setSchedulerOpen(!schedulerOpen);
  };

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
          <Button color="inherit" component={Link} to="/scheduler">Scheduler</Button>
          <Button color="inherit" component={Link} to="/marketing">Marketing</Button>
          <Button color="inherit" component={Link} to="/finance">Finance</Button>
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
            <ListItem button onClick={handleSchedulerClick}>
              <ListItemIcon>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText primary="Scheduler" />
              {schedulerOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={schedulerOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="/scheduler" sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <CalendarToday />
                  </ListItemIcon>
                  <ListItemText primary="Main Schedule" />
                </ListItem>
                <ListItem button component={Link} to="/scheduler/shift-swapping" sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SwapHoriz />
                  </ListItemIcon>
                  <ListItemText primary="Shift Swapping" />
                </ListItem>
                <ListItem button component={Link} to="/scheduler/time-off-requests" sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <TimeToLeave />
                  </ListItemIcon>
                  <ListItemText primary="Time-Off Requests" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button component={Link} to="/marketing">
              <ListItemIcon>
                <TrendingUp />
              </ListItemIcon>
              <ListItemText primary="Marketing" />
            </ListItem>
            <ListItem button component={Link} to="/finance">
              <ListItemIcon>
                <BarChart />
              </ListItemIcon>
              <ListItemText primary="Finance" />
            </ListItem>
            <ListItem button component={Link} to="/settings">
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
            <Route path="/scheduler" element={<Scheduler />} />
            <Route path="/scheduler/shift-swapping" element={<ShiftSwapping />} />
            <Route path="/scheduler/time-off-requests" element={<TimeOffRequests />} />
            <Route path="/marketing" element={<MarketingApp />} />
            <Route path="/finance" element={<FinanceApp />} />
            <Route path="/settings/*" element={<SettingsApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
