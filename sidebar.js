import React from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css';

export default function sidebar() {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/">Contacts</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}
