import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProviderList from './components/ProviderList';
import EmployeeList from './components/EmployeeList';
import Scheduler from './components/Scheduler';
import Settings from './components/Settings';
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
