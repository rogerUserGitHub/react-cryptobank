import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { INewsData } from '../interfaces/interfaces';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6945d9a517msh8b1d924b670b723p1fc407jsn96e412329fb7',
		'X-RapidAPI-Host': 'crypto-news14.p.rapidapi.com'
	}
};

export const News = () => {
  const [newsItems, setNewsItems] = useState<INewsData[]>([]);

  const url = 'https://crypto-news14.p.rapidapi.com/news/cointelegraph';

  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setNewsItems(data);
      })
      .catch(err => console.error(err));
  }, []);

  const slicedData = newsItems.slice(0 - 5)

  return (
    <>
      <Container id='news-container'>
        <Grid container spacing={5}>
          {slicedData.map(item => (
            <Grid item xs={12} md={12} lg={12}>
                <a href={item?.url}>{item?.title}</a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );

}
