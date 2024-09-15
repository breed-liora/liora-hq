import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProvider from './AddProvider';
import AddEmployee from './AddEmployee';
import ProviderList from './ProviderList';
import EmployeeList from './EmployeeList';
import Settings from './Settings';
import Scheduler from './Scheduler';

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
