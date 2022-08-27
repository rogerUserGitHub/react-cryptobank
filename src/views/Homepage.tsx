import { Button, Switch } from '@mui/material';
import React from 'react';
import Datagrid from '../common/components/Datagrid';
import CryptoCards from '../common/components/CryptoCard';
import NavigationBar from '../common/components/NavigationBar';
import GetCardByName from '../common/services/client';

export default function Homepage() {
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

      <GetCardByName />
      <CryptoCards />
    </>
  );
}
