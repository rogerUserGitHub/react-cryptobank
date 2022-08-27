import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
//import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import { ICryptoData } from '../interfaces/interfaces';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const CryptoCards = () => {
  const [spacing, setSpacing] = React.useState(8);
  const [cyrptoData, setCryptoData] = useState<ICryptoData[]>([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

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

  return (
    <>
      <Container>
        <Grid container>
          {cyrptoData.map(crypto => (
            <Grid item xs={12} md={6} lg={4}>
              <CardMedia
                component="img"
                height="110"
                image={crypto?.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  {crypto?.symbol}
                </Typography>
                <Typography variant='h5' component='div'>
                  {crypto?.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  current price: {crypto?.current_price}
                </Typography>
                <Typography 
                  variant='body2' 
                  color='darkorange'>
                    24h price change:
                    <br />
                    {crypto?.price_change_percentage_24h}
                    <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size='small'
                  href={`https://www.coindesk.com/price/${crypto?.name}`} 
                >
                  Learn more about {crypto?.name}
                </Button>
              </CardActions>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CryptoCards;
