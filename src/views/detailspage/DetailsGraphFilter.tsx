import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DetailsGraph from './DetailsGraph';
import { useEffect, useState } from 'react';
import { IGraphData } from '../../common/interfaces/interfaces';

const DetailsGraphFilter = (props: any) => {
  const [graphData, setGraphData] = useState<IGraphData[]>([]);
  const [graphDays, setGraphDays] = useState<string>('7');

  // GET request for graph data
  const url = `https://api.coingecko.com/api/v3/coins/${props.params.id}/market_chart?vs_currency=usd&days=${graphDays}&interval=daily`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setGraphData(data);
      })
      .catch(err => console.error(err));
  }, [graphDays, url]);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setGraphDays(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        color='primary'
        value={graphDays}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
      >
        <ToggleButton value='1'>24h</ToggleButton>
        <ToggleButton value='3'>3 days</ToggleButton>
        <ToggleButton value='7'>7 days</ToggleButton>
        <ToggleButton value='14'>14 days</ToggleButton>
        <ToggleButton value='30'>30 days</ToggleButton>
      </ToggleButtonGroup>

      <DetailsGraph graphData={graphData} />
    </>
  );
};

export default DetailsGraphFilter;
