import React, { useEffect, useState } from 'react';

export default function toggleDarkMode(event: any) {
    let colour = document.body.style.backgroundColor;
    if (colour === 'black') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  }
