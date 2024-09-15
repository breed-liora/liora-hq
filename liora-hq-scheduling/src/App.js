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
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/providers/add" element={<AddProvider />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/schedule" element={<Scheduler />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
