import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICryptoData } from './../common/interfaces/interfaces';
import { Container, Grid } from '@mui/material';

export default function Detailspage() {
  let params = useParams();

  const [cryptoData, setCryptoData] = useState<ICryptoData[]>();

  // GET request global info
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCryptoData(data);
      })
      .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(cryptoData)

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <h1>twefwerf</h1>
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <p>Market cap</p>
            <p>Total volume</p>
            <p>fully Diluted Valuation</p>
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <p>{cryptoData[0]?.market_cap}</p>
            <p>{cryptoData[0]?.total_volume}</p>
            <p>{cryptoData[0]?.fully_diluted_valuation}</p>
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <h1>{params.id}</h1>
            <h2>{params.id}</h2>
            <h3>{params.id}</h3>
            <h3>{params.id}</h3>
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <h1>{params.id}</h1>
            <h2>{params.id}</h2>
            <h3>{params.id}</h3>
            <h3>{params.id}</h3>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <h1>{params.id}</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
