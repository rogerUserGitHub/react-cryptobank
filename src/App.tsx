import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import RadioButton from './common/components/RadioButton';
import Switch from './common/components/Switch';
import Datagrid from './common/components/Datagrid';
import GetCardByName from './common/services/client';
import NavigationBar from './common/components/NavigationBar';
import { CryptoCards } from './common/components/CryptoCard';
import Homepage from './views/Homepage';

function App() {

  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
