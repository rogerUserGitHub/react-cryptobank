import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { INewsData } from '../../common/interfaces/interfaces';
import { componentShadowSX } from '../../common/utils/SxStyles';

interface IProps {
  slicedCardNewsVertItems: INewsData[];
  slicedCardNewsHorizItems: INewsData[];
  loading: boolean;
}

export const HomeNewsCardsVert = (props: IProps) => {
  const { slicedCardNewsVertItems, slicedCardNewsHorizItems, loading } = props;

  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>Latest crypto news</h1>
          </Typography>
        </Grid>
        {!loading ? (
          <Grid container spacing={3}>
            {slicedCardNewsVertItems.map(newsItem => (
              <Grid key={newsItem?.title} item xs={12} md={4} lg={4}>
                <Card sx={{ maxWidth: 345, height: 500, componentShadowSX }}>
                  <CardContent id='global-info-cards'>
                    <CardMedia
                      component='img'
                      height='170'
                      image={newsItem?.media}
                      alt='image'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='div'>
                        {newsItem.title}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {newsItem.summary}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' href={newsItem.link}>
                        Learn More
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <p>wefwef</p>
        )}
      </Container>
      <br></br>
    </>
  );
};

export const HomeNewsCardsHoriz = (props: IProps) => {
  const { slicedCardNewsHorizItems } = props;

  return (
    <>
      <Container>
        <Grid container>
          {slicedCardNewsHorizItems.map(newsItem => (
            <Grid item xs={12} md={12} lg={12}>
              <Card
                key={newsItem?.title}
                sx={{ maxWidth: 2000, height: 250, componentShadowSX }}
              >
                <CardContent id='global-info-cards'>
                  <CardMedia
                    component='img'
                    height='80'
                    sx={{ width: 1200 }}
                    image={newsItem?.media}
                    alt='image'
                  />
                  <CardContent>
                    <Typography align='left' variant='h5' component='div'>
                      {newsItem.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {newsItem.summary}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' href={newsItem.link}>
                      Learn More
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <br></br>
    </>
  );
};
