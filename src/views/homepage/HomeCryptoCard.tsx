import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { ICryptoData } from '../../common/interfaces/interfaces';
import { componentShadowSX } from '../../common/utils/SxStyles';
import Skeleton from '../../common/components/Skeleton';
import { useTranslation } from 'react-i18next';

interface IProps {
  slicedCryptoItems: ICryptoData[];
  handleToggle: any;
  buttonClicked: any;
  loading: boolean;
}

export const CryptoCards = (props: IProps) => {

  const { slicedCryptoItems, handleToggle, buttonClicked, loading } = props;
  const [t, i18n] = useTranslation();


  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>
            {t('Homepage.cryptoCards.header')}
            </h1>
          </Typography>
        </Grid>
      </Container>
      {!loading ? (
        <Container>
          <Grid container spacing={4}>
            {slicedCryptoItems.map(crypto => (
              <Grid id={crypto?.name} item xs={12} md={6} lg={4}>
                <Card key={crypto?.name} className='card-grid' sx={componentShadowSX}>
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
                      {t('Homepage.cryptoCards.currentPrice')}
                      </Typography>
                      <Typography variant='h6' sx={{ mb: 1.5 }} color='text.secondary'>
                        {crypto?.current_price}
                      </Typography>
                      <Typography variant='h6'>
                      {t('Homepage.cryptoCards.24PriceChange')}
                        </Typography>
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
