import React from 'react';
import './UserSummary.css';

const UserSummary: React.FC = () => {
  return (
    <header className="user-summary-header">
      <h1>Dashboard</h1>
      <div className="user-info">
        <span>Welcome, User!</span>
      </div>
    </header>
  );
};

export default UserSummary;