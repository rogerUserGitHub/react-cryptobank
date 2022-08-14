import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import RadioButton from './common/components/RadioButton';
import Switch from './common/components/Switch';
import Datagrid from './common/components/Datagrid';
import GetCardByName from './common/services/client';

function App() {
  function toggleDarkMode(event: any) {
    let colour = document.body.style.backgroundColor;
    if (colour === 'black') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  }

  return (
    <>
      <div className='App'>
        <Button variant='contained' color='success' size='large'>
          Hello World
        </Button>
      </div>
        <Switch />
      <br />
      <Datagrid />
      <GetCardByName />
    </>
  );
}

export default App;
