import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';
import { FaUserMd, FaUser, FaCalendarAlt, FaCog } from 'react-icons/fa';

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
            <li>
              <FaUserMd className="icon" />
              <Link to="/providers">Providers</Link>
            </li>
            <li>
              <FaUser className="icon" />
              <Link to="/employees">Employees</Link>
            </li>
            <li>
              <FaCalendarAlt className="icon" />
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <FaCog className="icon" />
              <Link to="/settings">Settings</Link>
            </li>
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
