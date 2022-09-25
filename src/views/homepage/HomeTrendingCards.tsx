import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { componentShadowSX } from '../../common/utils/SxStyles';
import Skeleton from '../../common/components/Skeleton';
import { ITrendingCrypto } from './../../common/interfaces/interfaces';
import { AreaChart, XAxis, YAxis, CartesianGrid, Area } from 'recharts';
import HomeTrendingGraphs from './HomeTrendingGraphs';
import { useEffect, useState } from 'react';
import SearchBar from '../../common/components/SearchBar';

interface IProps {
  trendingCrypto: ITrendingCrypto[];
  loading2: boolean;
}

// function handleBackClick() {
//   titleRef.current.scrollIntoView({ behavior: 'smooth' })
// }

export const HomeTrendingCards = (props: IProps) => {
  const { trendingCrypto, loading2 } = props;

  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>Trending crypto</h1>
          </Typography>
        </Grid>
      </Container>
      {!loading2 ? (
        <Container>
          <Grid container spacing={3}>
            {trendingCrypto?.map(crypto => (
              <Grid id={crypto?.item?.id} item xs={6} md={3} lg={3}>
                <Card
                  key={crypto?.item?.id}
                  className='card-grid'
                  sx={componentShadowSX}
                >
                  <CardActionArea href={`/details/${crypto?.item?.id}`}>
                    <CardContent className='card-grid'>
                      <CardMedia
                        component='img'
                        height='45'
                        image={crypto?.item?.large}
                        alt='crypto image'
                      />
                      <Typography
                        sx={{ fontSize: 20 }}
                        color='text.primary'
                        gutterBottom
                      >
                        {crypto?.item?.name}
                      </Typography>
                      <HomeTrendingGraphs cryptoName={crypto?.item?.id} />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
            <Grid id='eightCard' item xs={6} md={3} lg={3}>
              <Card key='eightCard' className='card-grid' sx={componentShadowSX}>
                <CardActionArea 
                    onClick={() => 
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                      })
                    }>
                  <CardContent className='card-grid' >
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold'}} color='text.primary' >
                      Search for crypto
                    </Typography>
                    <CardMedia
                      component='img'
                      height='202'
                      image='coin.jpg'
                      alt='crypto image'
                    />
                    {/* <Typography sx={{ fontSize: 20 }} color='text.primary' gutterBottom>
                      {crypto?.item?.name}
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
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

export default HomeTrendingCards;
