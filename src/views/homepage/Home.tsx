import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import CryptoCards from './HomeCryptoCard';
import CryptoTable from './HomeCryptoTable';
import { ICryptoData, IGlobalData, ITrendingCrypto } from '../../common/interfaces/interfaces';
import GlobalData from './HomeGlobalData';
import HomeCryptoBarChart from './HomeCryptoBarChart';
import { LanguageContext } from '../../context/LanguageContext';
import HomeTrendingCards from './trending/HomeTrendingCards';
import { useSnackbar } from 'material-ui-snackbar-provider';
import Footer from '../../common/components/Footer';
import { Container, Grid } from '@mui/material';

export default function Home() {
  const [globalData, setGlobalData] = useState<IGlobalData>();
  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [trendingCrypto, setTrendingCrypto] = useState<ITrendingCrypto | any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { language } = useContext(LanguageContext);
  const slicedCryptoItems = useMemo(() => cryptoData?.slice(-8), [cryptoData]);
  const slicedCryptoItems2 = useMemo(() => cryptoData?.slice(0, 5), [cryptoData]);
  const coins = useMemo(() => trendingCrypto?.coins || [], [trendingCrypto]);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('default');
  const snackbar = useSnackbar();
  const handleToggle = useCallback(() => {
    setButtonClicked((prev) => (prev === 'default' ? 'primary' : 'default'));
  }, []);

  const url1 = 'https://api.coingecko.com/api/v3/global';
  const url2 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  const url3 = 'https://api.coingecko.com/api/v3/search/trending';

  const fetchAllData = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const [globalDataRes, cryptoDataRes, trendingDataRes] = await Promise.all([
        handleApiRequest(url1),
        handleApiRequest(url2),
        handleApiRequest(url3),
      ]);

      setGlobalData(globalDataRes);
      setCryptoData(cryptoDataRes);
      setTrendingCrypto(trendingDataRes);
      snackbar.showMessage('Data updated successfully');
    } catch (err) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiRequest = async (url: string) => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        let errorMessage = `Error fetching data from ${url}: ${res.statusText} (Status: ${res.status})`;

        if (res.status === 429) {
          errorMessage =
            'Too many requests - I am using a free plan to query CoinGecko :) Please try again shortly.';
        } else if (res.status === 404) {
          errorMessage = 'Resource not found.';
        } else if (res.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        }
        throw new Error(errorMessage);
      }

      return await res.json();
    } catch (err: any) {
      if (err instanceof TypeError) {
        snackbar.showMessage(
          'Too many requests - I am using a free plan to query CoinGecko :) Please try again shortly.'
        );
      } else {
        snackbar.showMessage(err.message || 'An error occurred.');
      }
      throw err;
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [language]);

  if (hasError) {
    return (
      <>
        <Container>
          <Grid item xs={12} md={6} lg={12} marginBottom={1}>
            <img
              src={process.env.PUBLIC_URL + '/toomanyrequests.jpg'}
              alt={'toomanyrequests'}
              className="center"
            ></img>
          </Grid>
        </Container>
      </>
    );
  }

  return (
    <>
      <GlobalData
        globalData={globalData}
        trendingCrypto={coins}
        isLoading={isLoading}
        hasError={hasError}
      />
      <CryptoCards
        slicedCryptoItems={slicedCryptoItems}
        buttonClicked={buttonClicked}
        handleToggle={handleToggle}
        isLoading={isLoading}
        hasError={hasError}
      />
      <CryptoTable cryptoData={cryptoData} />
      <HomeCryptoBarChart slicedCryptoItems2={slicedCryptoItems2} />
      <HomeTrendingCards trendingCrypto={coins} isLoading={isLoading} />
      <Footer />
    </>
  );
}
