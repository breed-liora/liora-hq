import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AddProvider from './AddProvider.js';
import AddEmployee from './AddEmployee.js';
import ProviderList from './ProviderList.js';
import EmployeeList from './EmployeeList.js';
import Settings from './Settings.js';
import Scheduler from './Scheduler.js';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/add-provider" element={<AddProvider />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/schedule" element={<Scheduler />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
