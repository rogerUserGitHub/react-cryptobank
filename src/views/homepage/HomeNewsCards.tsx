import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INewsData } from '../../common/interfaces/interfaces';
import { componentShadowSX } from '../../common/utils/SxStyles';

interface IProps {
  slicedCardNewsItems: INewsData[];
  slicedTickerNewsItems: INewsData[];
}

export const HomeNewsCardsVert = (props: IProps) => {
  const { slicedCardNewsItems, slicedTickerNewsItems } = props;

  return (
    <>
      <Container>
        <Grid>
          <Typography>
            <h1>Latest crypto news</h1>
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          {slicedCardNewsItems.map(newsItem => (
            <Grid item xs={12} md={4} lg={4}>
              <Card sx={{ maxWidth: 345, height: 500, componentShadowSX }}>
                <CardContent id='global-info-cards'>
                  <CardMedia
                    component='img'
                    height='170'
                    image={newsItem?.image}
                    alt='image'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {newsItem.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {newsItem.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' href={newsItem.url}>
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

export const HomeNewsCardsHoriz = (props: IProps) => {
  const { slicedTickerNewsItems } = props;

  return (
    <>
      <Container>
        <Grid container>
          {slicedTickerNewsItems.map(newsItem => (
            <Grid item xs={12} md={12} lg={12}>
              <Card sx={{ maxWidth: 2000, height: 250, componentShadowSX }}>
                <CardContent id='global-info-cards'>
                  <CardMedia
                    component='img'
                    height='80'
                    sx={{ width: 1200 }}
                    image={newsItem?.image}
                    alt='image'
                  />
                  <CardContent>
                    <Typography align='left' variant='h5' component='div'>
                      {newsItem.title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {newsItem.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' href={newsItem.url}>
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
