import { useEffect, useState } from 'react';
import Banner from '../common/components/Banner';
import CryptoCards from '../common/components/CryptoCard';
import { NewsCards } from '../common/components/NewsCards';
import CryptoList from '../common/components/CryptoList';
import { ICryptoData, IGlobalData, INewsData } from '../common/interfaces/interfaces';
import GlobalData from '../common/components/GlobalData';

export default function Homepage() {
  const [globalData, setGlobalData] = useState<IGlobalData>();
  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [newsItems, setNewsItems] = useState<INewsData[]>([]);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('default');
  const [loading, setLoading] = useState(false);

  // GET request global info
  const url1 = 'https://api.coingecko.com/api/v3/global';

  useEffect(() => {
    fetch(url1)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setGlobalData(data);
      })
      .catch(err => console.error(err));
  }, []);

  // GET request crypto info
  const url2 =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    fetch(url2)
      .then(res => res.json())
      .then(data => {
        setCryptoData(data);
      })
      .catch(err => console.error(err));
  }, []);

  // GET request news info
  const url3 = 'https://crypto-news14.p.rapidapi.com/news/cointelegraph';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6945d9a517msh8b1d924b670b723p1fc407jsn96e412329fb7',
      'X-RapidAPI-Host': 'crypto-news14.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetch(url3, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setNewsItems(data);
      })
      .catch(err => console.error(err));
  }, []);

  const slicedCryptoItems = cryptoData.slice(0 - 6);
  const slicedCardNewsItems = newsItems.slice(0 - 3);
  const slicedTickerNewsItems = newsItems.slice(4 - 9);

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
      />
      <br /><br />
      <CryptoList cryptoData={cryptoData} />
      <br />
      <NewsCards
        slicedCardNewsItems={slicedCardNewsItems}
        slicedTickerNewsItems={slicedTickerNewsItems}
      />
    </>
  );
}
