import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AddProvider from './AddProvider';
import AddEmployee from './AddEmployee';
import ProviderList from './ProviderList';
import EmployeeList from './EmployeeList';
import Settings from './Settings';
import Scheduler from './Scheduler';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Welcome to Liora HQ</div>} />
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
