import React from 'react';

interface DisplaySettingProps {
  theme: string;
}

const DisplaySetting: React.FC<DisplaySettingProps> = ({ theme }) => {
  return <p>Current theme: <strong>{theme}</strong></p>;
};

export default DisplaySetting;
