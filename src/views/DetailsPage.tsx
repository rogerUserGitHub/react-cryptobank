import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICryptoData } from './../common/interfaces/interfaces';
import { Chip, Container, Grid, Tooltip } from '@mui/material';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';

export default function Detailspage() {
  let params = useParams();

  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);

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

  console.log(cryptoData);

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <p>Rank#: {cryptoData[0]?.market_cap_rank}</p>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <img height='30' width='30' src={cryptoData[0]?.image} alt='green iguana' />{' '}
            {cryptoData[0]?.name}
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <p>
              <b>Market cap </b>
              <Tooltip title='wefe' color='error'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p>
              <b>Total volume</b>
              <Tooltip title='wefe'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p>
              <b> fully Diluted Valuation </b>
              <Tooltip title='wefe'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <p>{cryptoData[0]?.market_cap}</p>
            <p>{cryptoData[0]?.total_volume}</p>
            <p>{cryptoData[0]?.fully_diluted_valuation}</p>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <p>
              <b>Low 24 </b>
              <Tooltip title='wefe'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p>
              <b>High 24</b>
              <Tooltip title='wefe'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p>
              <b>24h price change</b>
              <Tooltip title='wefe'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <p>{cryptoData[0]?.low_24h}</p>
            <p>{cryptoData[0]?.high_24h}</p>
            <p>{cryptoData[0]?.price_change_percentage_24h}</p>
          </Grid>
          <Grid item xs={6} md={4} lg={4}>
            <h1>{params.id}</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
