import { useEffect, useState } from 'react';
import Banner from '../common/components/Banner';
import CryptoCards from '../common/components/CryptoCard';
import { News } from '../common/components/News';
import { ICryptoData, INewsData } from '../common/interfaces/interfaces';

export default function Homepage() {

  const [cyrptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [newsItems, setNewsItems] = useState<INewsData[]>([]);
  const [buttonClicked, setButtonClicked] = useState<string | undefined>('default');
  const [loading, setLoading] = useState(false);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  useEffect(() => {
    fetch(url)
      .then(res =>
        res.json()
      )
      .then(data => {
        setCryptoData(data);
      })
      .catch(err =>
        console.error(err));
  }, []);

  const url2 = 'https://crypto-news14.p.rapidapi.com/news/cointelegraph';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6945d9a517msh8b1d924b670b723p1fc407jsn96e412329fb7',
      'X-RapidAPI-Host': 'crypto-news14.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(url2, options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setNewsItems(data);
      })
      .catch(err => console.error(err));
  }, []);

  const slicedNewsItems = newsItems.slice(0 - 5)

  console.log(cyrptoData);

  const handleToggle = () => {
    if (buttonClicked === 'default') {
      setButtonClicked('primary');
    } else {
      setButtonClicked('default');
    }
  };

  return (
    <>
      <br />
      <Banner />
      <br />
      <CryptoCards 
        cryptoData={cyrptoData}
        buttonClicked={buttonClicked} 
        handleToggle={handleToggle}/>
      <br />
      <News 
        slicedNewsItems={slicedNewsItems}
      />
    </>
  );
}
