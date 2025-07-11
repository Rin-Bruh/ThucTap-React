import React from 'react';
import DisplaySetting from './DisplaySetting';

interface SettingsPanelProps {
  theme: string;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ theme }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h3>Settings Panel</h3>
      <DisplaySetting theme={theme} />
    </div>
  );
};

export default SettingsPanel;
