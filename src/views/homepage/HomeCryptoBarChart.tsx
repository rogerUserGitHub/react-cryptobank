import { Container, Grid, Typography } from '@mui/material';
import React, { PureComponent } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ReferenceLine,
  Tooltip,
  XAxis,
} from 'recharts';
import { ICryptoData } from '../../common/interfaces/interfaces';

interface IProps {
  slicedCryptoItems2: ICryptoData[];
}

const HomeCryptoBarChart = (props: IProps) => {
  
  const { slicedCryptoItems2 } = props;

  return (
    <Container>
      <Grid container>
        <Grid item xs={6} md={6} lg={6}>
          <Typography>
            <h1>Top 5 crypto by market cap</h1>
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Typography>
            <h1>24h price change</h1>
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={6} lg={6}>
          <BarChart width={550} height={400} data={slicedCryptoItems2}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey='market_cap' fill='#8884d8' />
            <Bar dataKey='total_volume' fill='#82ca9d' />
          </BarChart>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <BarChart width={550} height={400} data={slicedCryptoItems2}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke='#000' />
            <Bar dataKey='price_change_percentage_24h' fill='#8884d8' />
          </BarChart>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeCryptoBarChart;
