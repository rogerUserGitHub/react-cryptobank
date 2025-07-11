import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICryptoData, IExchangeData } from '../../common/interfaces/interfaces';
import { Container, Grid } from '@mui/material';
import DetailsGraphFilter from './DetailsGraphFilter';
import DetailsData from './DetailsData';
import DetailsGraphAdditionalData from './DetailsGraphAdditionalData';
import CryptoConverter from './CryptoConverter';
import { useSnackbar } from 'notistack';

export default function Details() {
  let params = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [exchangeData, setExchangeData] = useState<IExchangeData>({});
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  // GET request global info
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params?.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  const fetchGlobalInfo = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setCryptoData(data);
      enqueueSnackbar('Updated data', { variant: 'success' });
    } catch (err: any) {
      console.error(err);
      enqueueSnackbar(err, { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const url2 = `https://api.coingecko.com/api/v3/exchange_rates`;

  const fetchExchangeRates = async () => {
    try {
      const res = await fetch(url2);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setExchangeData(data);
      enqueueSnackbar('Updated data', { variant: 'success' });
    } catch (err: any) {
      console.error(err);
      enqueueSnackbar(err, { variant: 'error' });
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchGlobalInfo();
  }, [url]);

  useEffect(() => {
    setLoading2(true);
    fetchExchangeRates();
  }, []);

  return (
    <>
      <Container>
        <Grid container>
          <DetailsData cryptoData={cryptoData} />
          <Grid item xs={12} md={12} lg={8}>
            <h1>
              {cryptoData[0]?.name} Price Graph ({cryptoData[0]?.name}/USD)
            </h1>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <DetailsGraphFilter params={params} />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <DetailsGraphAdditionalData cryptoData={cryptoData} />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <CryptoConverter exchangeData={exchangeData} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
