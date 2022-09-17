import * as React from 'react';
import { useEffect, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import { Switch } from '@mui/material';


export default function ToggleDarkModeButton() {
  const { darkMode, setDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const checkOnRender = () => {

    if (localStorage.theme === 'dark') {
      toggleDarkMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    if (localStorage.theme === 'light') {
      toggleDarkMode('light')
      document.body.style.backgroundColor = 'white';
    }
    if (!('theme' in localStorage)) {
      setThemeInStorage('light');
      toggleDarkMode('light');
      document.body.style.backgroundColor = 'white';
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
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setThemeInStorage('dark')
      document.body.style.backgroundColor = '#181818';
      document.body.style.color = 'white';
    }
  };

  return (
    <>
      <Switch
        //  sx={{ 
        //   textAlign: 'right',
        //   position: "absolute",
        // }}
        checked={darkMode}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </>
  );
}
