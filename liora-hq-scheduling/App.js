import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProvider from './liora-hq-scheduling/AddProvider';
import AddEmployee from './liora-hq-scheduling/AddEmployee';
import ProviderList from './liora-hq-scheduling/ProviderList';
import EmployeeList from './liora-hq-scheduling/EmployeeList';
import Settings from './liora-hq-scheduling/Settings';
import Scheduler from './liora-hq-scheduling/Scheduler';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/add-provider">Add Provider</Link></li>
            <li><Link to="/add-employee">Add Employee</Link></li>
            <li><Link to="/providers">Providers</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/add-provider" element={<AddProvider />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/schedule" element={<Scheduler />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
