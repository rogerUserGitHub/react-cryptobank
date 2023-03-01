import { useContext, useEffect, useState } from 'react';
import CryptoCards from './HomeCryptoCard';
import { HomeNewsCardsVert } from './HomeNewsCards';
import CryptoTable from './HomeCryptoTable';
import {
  ICryptoData,
  IGlobalData,
  INewsData,
  ITrendingCrypto,
} from '../../common/interfaces/interfaces';
import GlobalData from './HomeGlobalData';
import HomeCryptoBarChart from './HomeCryptoBarChart';
import { LanguageContext } from '../../context/LanguageContext';
import HomeTrendingCards from './trending/HomeTrendingCards';
import { useSnackbar } from 'material-ui-snackbar-provider';
import Footer from '../../common/components/Footer';

export default function Home() {
  const [globalData, setGlobalData] = useState<IGlobalData>();
  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [trendingCrypto, setTrendingCrypto] = useState<ITrendingCrypto | any>();
  const [newsItems, setNewsItems] = useState<INewsData[] | any>([]);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('default');
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [inProgress1, setInProgress1] = useState(false);
  const [inProgress2, setInProgress2] = useState(false);
  const [inProgress3, setInProgress3] = useState(false);
  const { language } = useContext(LanguageContext);

  const snackbar = useSnackbar();

  // console.log(cryptoData);

  // GET request global info
  const url1 = 'https://api.coingecko.com/api/v3/global';

  const fetchGlobalData = async () => {
    try {
      const res = await fetch(url1);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setGlobalData(data);
      snackbar.showMessage('Updated data');
    } catch (err: any) {
      console.error(err);
      snackbar.showMessage(err);
    } finally {
      setLoading2(false);
    }
  };

  // GET request crypto info
  const url2 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  const fetchCryptoData = async () => {
    try {
      const res = await fetch(url2);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setCryptoData(data);
      console.log(cryptoData);
      snackbar.showMessage('Updated data');
    } catch (err: any) {
      console.error(err);
      snackbar.showMessage(err);
    } finally {
      setLoading(false);
    }
  };

  // GET request trending data
  const url4 = 'https://api.coingecko.com/api/v3/search/trending';

  const fetchTrendingData = async () => {
    try {
      const res = await fetch(url4);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setTrendingCrypto(data);
      snackbar.showMessage('Updated data');
    } catch (err: any) {
      console.error(err);
      snackbar.showMessage(err);
    } finally {
      setLoading3(false);
    }
  };

  const { coins } = trendingCrypto || {};

  const slicedCryptoItems = cryptoData?.slice(0 - 6);
  const slicedCryptoItems2 = cryptoData?.slice(0, 5);

  // let slicedCardNewsVertItems = [];
  // let slicedCardNewsHorizItems = [];
  // slicedCardNewsVertItems = newsItems?.value?.slice(0 - 3);
  // slicedCardNewsHorizItems = newsItems?.value?.slice(4 - 9);

  const handleToggle = () => {
    if (buttonClicked) {
      setButtonClicked('primary');
    } else {
      setButtonClicked('default');
    }
  };

  useEffect(() => {
    setLoading2(true);
    console.log('Before fetchGlobalData()');
    fetchGlobalData();
    console.log('After fetchGlobalData()');
  }, [language]);

  useEffect(() => {
    setLoading(true);
    console.log('Before fetchCryptoData()');
    fetchCryptoData();
    console.log('After fetchCryptoData()');
  }, [language]);

  useEffect(() => {
    setLoading3(true);
    console.log('Before fetchTrendingoData()');
    fetchTrendingData();
    console.log('After fetchTrendingoData()');
  }, [language]);

  return (
    <>
      <GlobalData globalData={globalData} />
      <CryptoCards
        slicedCryptoItems={slicedCryptoItems}
        buttonClicked={buttonClicked}
        handleToggle={handleToggle}
        loading={loading}
      />
      <br />
      <br />
      <CryptoTable cryptoData={cryptoData} />
      <br />
      <HomeCryptoBarChart slicedCryptoItems2={slicedCryptoItems2} />
      <HomeTrendingCards trendingCrypto={coins} loading2={false} />
      {/* <HomeNewsCardsVert
        slicedCardNewsVertItems={slicedCardNewsVertItems}
        slicedCardNewsHorizItems={slicedCardNewsHorizItems}
        loading={loading3}
      /> */}
      <Footer />
    </>
  );
}
