import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>Liora HQ</h1>
        <div className="user-circle">👤</div>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li><Link to="/add-provider">Add Provider</Link></li>
            <li><Link to="/add-employee">Add Employee</Link></li>
            <li><Link to="/providers">Providers</Link></li>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
