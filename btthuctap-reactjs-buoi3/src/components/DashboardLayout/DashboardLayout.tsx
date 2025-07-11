import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MainPanel from '../MainPanel/MainPanel';
import Footer from '../Footer/Footer';
import './DashboardLayout.css';
import Header from '../Header/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard-layout-container">
      <Header />
      <Sidebar />
      <MainPanel>
        {children}
      </MainPanel>
      <Footer />
    </div>
  );
};

export default DashboardLayout;