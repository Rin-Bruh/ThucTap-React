import React from 'react';
import './MainContent.css';

interface MainContentProps {
  children: React.ReactNode;
}

function MainContent({ children }: MainContentProps) {
  return (
    <main className="main-content">
      {children}
    </main>
  );
}

export default MainContent;