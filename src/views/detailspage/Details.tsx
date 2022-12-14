import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICryptoData, IExchangeData } from '../../common/interfaces/interfaces';
import { Container, Grid } from '@mui/material';
import DetailsGraphFilter from './DetailsGraphFilter';
import DetailsData from './DetailsData';
import DetailsGraphAdditionalData from './DetailsGraphAdditionalData';
import { useTranslation } from 'react-i18next';
import CryptoConverter from './CryptoConverter';
import Footer from '../../common/components/Footer';

export default function Details() {
  let params = useParams();

  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [exchangeData, setExchangeData] = useState<IExchangeData>({});

  // GET request global info
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCryptoData(data);
      })
      .catch(err => {
        console.error(err);
        if (err.response.status > 400 && err.response.status < 500) {
          window.location.href = '/About';
          return;
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const url2 = `https://api.coingecko.com/api/v3/exchange_rates`;

  useEffect(() => {
    fetch(url2)
      .then(res => res.json())
      .then(data => {
        setExchangeData(data);
      })
      .catch(err => {
        console.error(err);
        if (err.response.status > 400 && err.response.status < 500) {
          window.location.href = '/About';
          return;
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Footer />
    </>
  );
}
