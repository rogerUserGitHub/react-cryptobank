import * as React from 'react';
import Switch from '@mui/material/Switch';
import { sizeHeight } from '@mui/system';

const label = { inputProps: { 'aria-label': 'Switch demo'} };

export function toggleDarkMode(event: any) {
  let colour = document.body.style.backgroundColor;
  if (colour === 'black') {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'black';
  }
}

export default function BasicSwitches() {
  return (
    <div>
      Toggle darkmode
      <Switch {...label} defaultChecked onChange={toggleDarkMode}/>
    </div>
  );
}
