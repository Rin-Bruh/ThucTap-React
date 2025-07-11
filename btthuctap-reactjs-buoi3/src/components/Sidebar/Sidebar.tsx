import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;