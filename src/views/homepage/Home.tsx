import { useContext, useEffect, useState } from 'react';
import CryptoCards from './HomeCryptoCard';
import { HomeNewsCardsHoriz, HomeNewsCardsVert } from './HomeNewsCards';
import CryptoTable from './HomeCryptoTable';
import {
  ICryptoData,
  IGlobalData,
  INewsData,
  ITrendingCrypto,
} from '../../common/interfaces/interfaces';
import GlobalData from './HomeGlobalData';
import HomeCryptoBarChart from './HomeCryptoBarChart';
import HomeTrendingCards from './HomeTrendingCards';
import { LanguageContext } from '../../context/LanguageContext';

export default function Home() {

  const [globalData, setGlobalData] = useState<IGlobalData>();
  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [trendingCrypto, setTrendingCrypto] = useState<ITrendingCrypto | any>();
  const [newsItems, setNewsItems] = useState<INewsData[] | any>([]);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('default');
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const { language, setLanguage, changeLanguage } = useContext(LanguageContext);

  console.log(loading2)

  // GET request global info
  const url1 = 'https://api.coingecko.com/api/v3/global';

  useEffect(() => {
    fetch(url1)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        else return res.json();
      })
      .then(data => {
        setGlobalData(data);
      })
      .catch(err => console.error(err));
  }, [language]);

  // GET request crypto info
  const url2 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    fetch(url2)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        else return res.json();
      })
      .then(data => {
        setCryptoData(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [loading, language]);

  // GET request news info
  const url3 = 'https://free-news.p.rapidapi.com/v1/search?q=crypto&lang=en&page_size=5';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6945d9a517msh8b1d924b670b723p1fc407jsn96e412329fb7',
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
  };

  // useEffect(() => {
  //   fetch(url3, options)
  //     .then(res => {
  //       if (!res.ok) throw new Error(res.statusText);
  //       else return res.json();
  //     })
  //     .then(data => {
  //       setNewsItems(data);
  //       setLoading3(false);
  //       console.log(data)
  //     })
  //     .catch(err => console.error(err));
  // }, [loading3]);

  // GET request trending data
  const url4 = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    fetch(url4)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        else return res.json();
      })
      .then(data => {
        setTrendingCrypto(data);
        setLoading2(false);
      })
      .catch(err => console.error(err));
  }, [loading2, language]);

  const { coins } = trendingCrypto || {};

  const slicedCryptoItems = cryptoData?.slice(0 - 6);
  const slicedCryptoItems2 = cryptoData?.slice(0, 5);

  let slicedCardNewsVertItems = [];
  let slicedCardNewsHorizItems = [];
  if (typeof newsItems !== 'undefined') {
    slicedCardNewsVertItems = newsItems?.slice(0 - 3);
  }
  if (typeof newsItems !== 'undefined') {
    slicedCardNewsHorizItems = newsItems?.slice(4 - 9);
  }

  const handleToggle = () => {
    if (buttonClicked) {
      setButtonClicked('primary');
    } else {
      setButtonClicked('default');
    }
  };

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
      <HomeNewsCardsVert
        slicedCardNewsVertItems={slicedCardNewsVertItems}
        slicedCardNewsHorizItems={slicedCardNewsHorizItems}
        loading={loading3}
      />
      <HomeNewsCardsHoriz
        slicedCardNewsVertItems={slicedCardNewsVertItems}
        slicedCardNewsHorizItems={slicedCardNewsHorizItems}
        loading={loading3}
      />
    </>
  );
}
