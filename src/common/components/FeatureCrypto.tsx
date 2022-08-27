import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
//import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import Paper from '@mui/material/Paper';

interface IProps {
  id: String;
  symbol: String;
  coingecko_rank: String;
  market_cap_rank: String;
  image: String;
}

export const Featured = () => {
  const [spacing, setSpacing] = React.useState(8);
  const [cyrptoData, setCryptoData] = useState<IProps[]>([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20apecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCryptoData(data);
      });
  }, []);

  console.log(cyrptoData);

  // https://www.youtube.com/watch?v=GYTN5JdkLSQ

  return (
    <>
      <Container>
        <Grid container>
          {/* <Grid item xs={12} md={6} lg={4}>
            <Paper>
              {cyrptoData[0]?.id}
              {cyrptoData[0]?.symbol}
              {cyrptoData[0]?.coingecko_rank}
              {cyrptoData[0]?.image}
              {cyrptoData[0]?.market_cap_rank}
            </Paper>
          </Grid> */}
          {cyrptoData.map(crypto => (
            <Grid item xs={12} md={6} lg={4}>
              <Paper>{crypto?.id}</Paper>
              <Paper>{crypto?.symbol}</Paper>
              <Paper>{crypto?.coingecko_rank}</Paper>
              <Paper>{crypto?.market_cap_rank}</Paper>
              <Paper> {crypto?.image}</Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Featured;
