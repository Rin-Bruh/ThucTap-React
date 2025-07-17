import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginForm from './components/LoginForm';

// Types
interface User {
  access_token: string;
  refresh_token: string;
}

const App: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <Home />
      <LoginForm
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default App;
