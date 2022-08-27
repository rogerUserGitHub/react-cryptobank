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
      <Switch />
      <br />
      <CryptoCards />
    </>
  );
}
