import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkMode = (props) => {
  const { theme, setTheme } = props;

  const toggleDarkMode = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <DarkModeSwitch
      checked={theme === 'dark'}
      onChange={toggleDarkMode}
      size={30}
      moonColor='black'
      sunColor='yellow'
    />
  );
};

export default DarkMode;
