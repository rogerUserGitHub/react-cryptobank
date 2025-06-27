import { Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis } from 'recharts';
import { ICryptoData } from '../../common/interfaces/interfaces';

interface IProps {
  slicedCryptoItems2: ICryptoData[];
}

const HomeCryptoBarChart = (props: IProps) => {
  const { slicedCryptoItems2 } = props;
  const [t, i18n] = useTranslation();

  return (
    <Container>
      <Grid container>
        <Grid item xs={6} md={6} lg={6}>
          <Typography>
            <h1>{t('Homepage.cryptoGraph.header1')}</h1>
          </Typography>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <Typography>
            <h1>{t('Homepage.cryptoGraph.header2')}</h1>
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6} md={6} lg={6}>
          <BarChart width={550} height={400} data={slicedCryptoItems2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="market_cap" fill="lightseagreen" />
            <Bar dataKey="total_volume" fill="lightpink" />
          </BarChart>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <BarChart width={550} height={400} data={slicedCryptoItems2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="price_change_percentage_24h" fill="lightseagreen" />
          </BarChart>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeCryptoBarChart;
