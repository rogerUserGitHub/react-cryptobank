import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DetailsGraph from './DetailsGraph';
import { useEffect, useState } from 'react';
import { IGraphData } from '../../common/interfaces/interfaces';
import { useTranslation } from 'react-i18next';

const DetailsGraphFilter = (props: any) => {
  const [graphData, setGraphData] = useState<IGraphData[]>([]);
  const [graphDays, setGraphDays] = useState<string>('7');
  const [graphTypeData, setGraphTypeData] = useState<string>('prices');
  const [loading, setLoading] = useState(true);

  // GET request for graph data
  const url = `https://api.coingecko.com/api/v3/coins/${props.params.id}/market_chart?vs_currency=usd&days=${graphDays}&interval=daily`;

  const fetchGraphData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setGraphData(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchGraphData();
  }, [graphDays, url]);

  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setGraphData(data);
  //       console.log(graphData);
  //     })
  //     .catch(err => console.error(err));
  // }, [graphDays, url]);

  const handleChangeNumberDays = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setGraphDays(newAlignment);
  };

  const handleChangeTypeData = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment2: string
  ) => {
    setGraphTypeData(newAlignment2);
  };

  return (
    <>
      <ToggleButtonGroup
        color='primary'
        value={graphDays}
        exclusive
        onChange={handleChangeNumberDays}
        aria-label='Platform'
      >
        <ToggleButton value='1'>24h</ToggleButton>
        <ToggleButton value='3'>3 days</ToggleButton>
        <ToggleButton value='7'>7 days</ToggleButton>
        <ToggleButton value='14'>14 days</ToggleButton>
        <ToggleButton value='30'>30 days</ToggleButton>
      </ToggleButtonGroup>{' '}
      <br></br>
      <ToggleButtonGroup
        color='secondary'
        value={graphTypeData}
        exclusive
        onChange={handleChangeTypeData}
        aria-label='Platform'
      >
        <ToggleButton value='prices'>prices</ToggleButton>
        <ToggleButton value='market_caps'>Market cap</ToggleButton>
        <ToggleButton value='total_volumes'>Total volume</ToggleButton>
      </ToggleButtonGroup>
      <DetailsGraph graphData={graphData} graphTypeData={graphTypeData} />
    </>
  );
};

export default DetailsGraphFilter;
