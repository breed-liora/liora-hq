import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import ProviderList from './ProviderList';
import EmployeeList from './EmployeeList';
import Scheduler from './Scheduler';
import Settings from './Settings';
import AddProvider from './AddProvider';
import AddEmployee from './AddEmployee';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/providers" element={<ProviderList />} />
          <Route path="/providers/add" element={<AddProvider />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/schedule" element={<Scheduler />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<ProviderList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
