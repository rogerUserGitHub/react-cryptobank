import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import RadioButton from './common/components/RadioButton';
import Switch from './common/components/Switch';
import Datagrid from './common/components/Datagrid';
import GetCardByName from './common/services/client';
import NavigationBar from './common/components/NavigationBar';
import { Featured } from './common/components/FeatureCrypto';

function App() {

  return (
    <>
      <NavigationBar />
      <div className='App'>
        <Button variant='contained' color='success' size='large'>
          Hello World
        </Button>
      </div>
        <Switch />
      <br />
      <Datagrid />
      <GetCardByName />
      <Featured />
    </>
  );
}

export default App;
