import React from 'react';
import './MainPanel.css';

interface MainPanelProps {
  children: React.ReactNode;
}

const MainPanel: React.FC<MainPanelProps> = ({ children }) => {
  return (
    <main className="main-panel">
      {children}
    </main>
  );
};

export default MainPanel;