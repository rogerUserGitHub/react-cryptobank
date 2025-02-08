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
import { useTranslation } from 'react-i18next';
import Skeleton from '../../common/components/Skeleton';

interface IProps {
  slicedCryptoItems: ICryptoData[];
  handleToggle: any;
  buttonClicked: any;
  isLoading: boolean;
  hasError: boolean;
}

export const CryptoCards = (props: IProps) => {
  const { slicedCryptoItems, handleToggle, buttonClicked, isLoading, hasError } = props;
  const [t, i18n] = useTranslation();

  if (isLoading) {
    return (
      <Container>
        <Grid item xs={12} md={6} marginBottom={1}>
          <Typography variant="h4">{t('Homepage.cryptoCards.header')}</Typography>
        </Grid>
        <Grid container spacing={3}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <Grid item xs={12} md={6} lg={4} key={idx}>
              <Skeleton />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (hasError) {
    return (
      <Container>
        <Grid item xs={12} md={6} marginBottom={1}>
          <Typography variant="h4">{t('Homepage.cryptoCards.header')}</Typography>
        </Grid>
        <Typography variant="body1" color="text.secondary">
          {t('Homepage.global.errorDescription')}
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Grid>
          <Typography variant="h4" paddingTop={1} marginBottom={1}>
            {t('Homepage.cryptoCards.header')}
          </Typography>
        </Grid>
      </Container>
      {!isLoading && slicedCryptoItems.length > 0 ? (
        <Container>
          <Grid container spacing={3}>
            {slicedCryptoItems.map((crypto) => (
              <Grid id={crypto?.name} item xs={12} md={6} lg={3}>
                <Card key={crypto?.name} className="card-grid" sx={componentShadowSX}>
                  <CardActionArea href={`/details/${crypto.id}`}>
                    <CardContent className="card-grid">
                      <CardMedia
                        component="img"
                        height="110"
                        image={crypto?.image}
                        alt="crypto image"
                      />
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {crypto?.symbol}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {crypto?.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {t('Homepage.cryptoCards.currentPrice')}
                      </Typography>
                      <Typography variant="h6" sx={{ mb: 1.5 }} color="text.secondary">
                        {crypto?.current_price}
                      </Typography>
                      <Typography variant="h6">
                        {t('Homepage.cryptoCards.24PriceChange')}
                      </Typography>
                      <Typography
                        variant="h6"
                        color={crypto?.price_change_percentage_24h < 0 ? 'red' : 'green'}
                      >
                        {crypto?.price_change_percentage_24h}
                        <br />
                      </Typography>
                      <CardActions>
                        <Button size="small" href={`https://www.coinbase.com/price/${crypto.id}`}>
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
      ) : null}
    </>
  );
};

export default CryptoCards;
