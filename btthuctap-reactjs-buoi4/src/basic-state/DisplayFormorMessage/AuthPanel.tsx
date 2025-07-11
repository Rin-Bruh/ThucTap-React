import React, { useState } from 'react';
import './AuthPanel.css';

const AuthPanel: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="auth-panel">
      <div className="auth-icon">👤</div>
      <h2>User Authentication</h2>
      {!isLoggedIn ? (
        <>
          <p>Please login to continue</p>
          <button className="dark-btn" onClick={handleLogin}>
            <span style={{ marginRight: '6px' }}>🔐</span> Login
          </button>
        </>
      ) : (
        <>
          <p className="success-msg">You are logged in!</p>
          <button className="light-btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default AuthPanel;
