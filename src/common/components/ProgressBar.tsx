import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { ProgressBar } from 'react-bootstrap';

const ProgressBarr = (props: any) => {

    return (
        <div>
          <ProgressBar striped variant="success" now={40} />
          <ProgressBar striped variant="info" now={20} />
          <ProgressBar striped variant="warning" now={60} />
          <ProgressBar striped variant="danger" now={80} />
        </div>
    );
}

export default ProgressBarr;
