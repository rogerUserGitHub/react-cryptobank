import * as React from 'react';
import { useEffect, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Switch } from '@mui/material';


export default function ToggleButtonDarkMode() {
  const { darkMode, setDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  console.log(darkMode)

  const checkOnRender = () => {

    if (localStorage.theme === 'dark') {
      toggleDarkMode('dark');
    }
    if (localStorage.theme === 'light') {
      toggleDarkMode('light')
    }
    if (!('theme' in localStorage)) {
      setThemeInStorage('light');
      toggleDarkMode('light');
    }
  };

  const setThemeInStorage = (theme: string) => {
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    checkOnRender();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked)
    if (event.target.checked === false) {
      setThemeInStorage('light')
    } else {
      setThemeInStorage('dark')
    }
  };

  return (
    <>
      <Switch
        checked={darkMode}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </>
  );
}
