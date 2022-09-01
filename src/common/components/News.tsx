import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INewsData } from '../interfaces/interfaces';

interface IProps {
  slicedNewsItems: INewsData[]
}

export const News = (props: IProps) => {

  const { slicedNewsItems } = props

  return (
    <>
      <Container id='news-container'>
        <Grid container spacing={5}>
          {slicedNewsItems.map(item => (
            <Grid item xs={12} md={12} lg={12}>
                <a href={item?.url}>{item?.title}</a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );

}
