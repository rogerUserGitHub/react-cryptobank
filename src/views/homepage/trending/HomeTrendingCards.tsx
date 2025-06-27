import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { ITrendingCrypto } from '../../../common/interfaces/interfaces';
import { componentShadowSX } from '../../../common/utils/SxStyles';

interface IProps {
  trendingCrypto: ITrendingCrypto[];
  isLoading: boolean;
}

export const HomeTrendingCards = (props: IProps) => {
  const { trendingCrypto, isLoading } = props;

  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>Trending crypto</h1>
          </Typography>
        </Grid>
      </Container>
      {!isLoading && trendingCrypto.length > 0 ? (
        <Container>
          <Grid container spacing={3}>
            {trendingCrypto?.slice(0, 3).map((crypto) => (
              <Grid id={crypto?.item?.id} item xs={6} md={3} lg={3} key={crypto?.item?.id}>
                <Card key={crypto?.item?.id} className="card-grid" sx={componentShadowSX}>
                  <CardActionArea href={`/details/${crypto?.item?.id}`}>
                    <CardContent className="card-grid">
                      <CardMedia
                        component="img"
                        height="45"
                        image={crypto?.item?.large}
                        alt="crypto image"
                      />
                      <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                        {crypto?.item?.name}
                      </Typography>
                      <CardMedia
                        component="img"
                        height="90"
                        image={crypto?.item?.data?.sparkline}
                        alt="sparkline"
                      />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
            <Grid id="eightCard" item xs={6} md={3} lg={3}>
              <Card key="eightCard" className="card-grid" sx={componentShadowSX}>
                <CardActionArea
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: 'smooth',
                    })
                  }
                >
                  <CardContent className="card-grid">
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.primary">
                      Search for crypto
                    </Typography>
                    <CardMedia component="img" height="140" image="coin.jpg" alt="crypto image" />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default HomeTrendingCards;
