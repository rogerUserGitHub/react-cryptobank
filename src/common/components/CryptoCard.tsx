import { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ICryptoData } from './../interfaces/interfaces';

interface IProps {
  cryptoData: ICryptoData[]
  handleToggle: any
  buttonClicked: any
}

export const CryptoCards = (props: IProps) => {

  const [toggle, setToggle] = useState(false);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('default');

  const { 
    cryptoData,
  } = props

  const handleToggle = () => {
    if (buttonClicked === 'default') {
      setButtonClicked('primary');
    } else {
      setButtonClicked('default');
    }
  };

  return (
    <>
      <Container>
        <Grid container spacing={10}>
          {cryptoData.map(crypto => (
            <Grid item xs={12} md={6} lg={4}>
              <Card className='card-grid'>
                <CardContent className='card-grid'>
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
                  <CardActions>
                    <Button
                      size='small'
                      href={`https://www.coindesk.com/price/${crypto?.name}`}
                    >
                      Learn more
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CryptoCards;
