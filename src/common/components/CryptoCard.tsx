import React, { useEffect, useState } from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
//import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import { ICryptoData } from '../interfaces/interfaces';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const CryptoCards = () => {

  const [cyrptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [toggle, setToggle] = useState(false);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('default');

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCryptoData(data);
      });
  }, []);

  console.log(cyrptoData);

  const handleToggle = () => {
    if (buttonClicked === 'default') {
      setButtonClicked('primary')
    } else {
      setButtonClicked('default')
    }
  }

  return (
    <>
      <Container>
        <Grid container spacing={10}>
          {cyrptoData.map(crypto => (
            <Grid item xs={12} md={6} lg={4}>
              <CardContent>
                <CardMedia
                  component='img'
                  height='110'
                  image={crypto?.image}
                  alt='green iguana'
                />
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                  {crypto?.symbol}
                </Typography>
                <Typography variant='h5' component='div'>
                  {crypto?.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  current price: {crypto?.current_price}
                </Typography>
                <Typography variant='body2' color='darkorange'>
                  24h price change:
                  <br />
                  {crypto?.price_change_percentage_24h}
                  <br />
                </Typography>
              </CardContent>
              <CardActions >
                <Button
                  size='small'
                  href={`https://www.coindesk.com/price/${crypto?.name}`}
                >
                  Learn more about {crypto?.name}
                </Button>
                <IconButton 
                  aria-label='add to favorites' 
                  disabled={false}
                  color={buttonClicked}
                  id={crypto?.name}
                  onClick={handleToggle}
                  >
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CryptoCards;
