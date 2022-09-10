import { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ICryptoData } from '../../common/interfaces/interfaces';
import { componentShadowSX } from '../../common/utils/SxStyles';
import Skeleton from '../../common/components/Skeleton';

interface IProps {
  slicedCryptoItems: ICryptoData[];
  handleToggle: any;
  buttonClicked: any;
  loading: boolean;
}

export const CryptoCards = (props: IProps) => {
  const { slicedCryptoItems, handleToggle, buttonClicked, loading } = props;

  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>Cryptocurrencies of the day</h1>
          </Typography>
        </Grid>
      </Container>
      {!loading ? (
        <Container>
          <Grid container spacing={4}>
            {slicedCryptoItems.map(crypto => (
              <Grid id={crypto?.name} item xs={12} md={6} lg={4}>
                <Card className='card-grid' sx={componentShadowSX}>
                  <CardActionArea href={`/details/${crypto.id}`}>
                    <CardContent className='card-grid'>
                      <CardMedia
                        component='img'
                        height='110'
                        image={crypto?.image}
                        alt='crypto image'
                      />
                      <Typography
                        sx={{ fontSize: 14 }}
                        color='text.secondary'
                        gutterBottom
                      >
                        {crypto?.symbol}
                      </Typography>
                      <Typography variant='h5' component='div'>
                        {crypto?.name}
                      </Typography>
                      <Typography variant='h6' color='text.secondary'>
                        current price:
                      </Typography>
                      <Typography variant='h6' sx={{ mb: 1.5 }} color='text.secondary'>
                        {crypto?.current_price}
                      </Typography>
                      <Typography variant='h6'>24h price change:</Typography>
                      <Typography
                        variant='h6'
                        color={
                          crypto?.price_change_percentage_24h < 0 ? 'red' : 'green'
                        }
                      >
                        {crypto?.price_change_percentage_24h}
                        <br />
                      </Typography>
                      <CardActions>
                        <Button
                          size='small'
                          href={`https://www.coinbase.com/price/${crypto.id}`}
                        >
                          Learn more
                        </Button>
                        <IconButton
                          id={crypto.id}
                          aria-label='add to favorites'
                          disabled={false}
                          onClick={handleToggle}
                          color={buttonClicked}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Container>
          <Grid container spacing={4}>

            <Grid item xs={12} md={6} lg={4}>
              <Skeleton />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Skeleton />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Skeleton />
            </Grid>


          </Grid>
        </Container>
      )}
    </>
  );
};

export default CryptoCards;
