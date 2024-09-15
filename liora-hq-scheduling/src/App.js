import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProviderList from './ProviderList';
import EmployeeList from './EmployeeList';
import Scheduler from './Scheduler';
import Settings from './Settings';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/schedule" element={<Scheduler />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<ProviderList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
