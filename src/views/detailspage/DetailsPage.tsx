import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICryptoData, IGraphData } from '../../common/interfaces/interfaces';
import { Chip, Container, Grid, Tooltip } from '@mui/material';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import DetailsGraph from './DetailsGraph';

export default function Detailspage() {
  
  let params = useParams();

  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  const [graphData, setGraphData] = useState<IGraphData[]>([]);
  const [graphDays, setGraphDays] = useState<number>(7)

  // GET request global info
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${params.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCryptoData(data);
      })
      .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // GET request graph info
  const urlx = `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=usd&days=${graphDays}&interval=daily`

  useEffect(() => {
    fetch(urlx)
      .then(res => res.json())
      .then(data => {
        setGraphData(data);
      })
      .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={12} lg={12}>
            <p className='rounded-corners'>Rank#: {cryptoData[0]?.market_cap_rank}</p>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <div className='grid-container'>
              <div className='current-price'>${cryptoData[0]?.current_price}</div>
              <div className='grid-item'>
                {cryptoData[0]?.price_change_percentage_24h}%
                {cryptoData[0]?.price_change_percentage_24h > 0 ? (
                  <CallMissedOutgoingIcon
                    fontSize='small'
                    color='primary'
                  ></CallMissedOutgoingIcon>
                ) : (
                  <SouthEastIcon fontSize='small' color='error'></SouthEastIcon>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <img height='30' width='30' src={cryptoData[0]?.image} alt='' />
            {cryptoData[0]?.name} ({cryptoData[0]?.symbol})
          </Grid>

          <Grid item xs={3} md={2} lg={2}>
            <p className='column-title'>
              Market cap
              <Tooltip
                title='Market Cap = Current Price x Circulating Supply'
                color='error'
              >
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p className='column-title'>
              Total volume
              <Tooltip title='Total volume of the crypto' color='error'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p className='column-title'>
              Fully Diluted Val.
              <Tooltip title='FDV = Current Price x Max Supply' color='error'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <p>{cryptoData[0]?.market_cap}</p>
            <p>{cryptoData[0]?.total_volume}</p>
            <p>{cryptoData[0]?.fully_diluted_valuation}</p>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <p className='column-title'>
              Low 24
              <Tooltip title='Lowest pricepoint in last 24h' color='error'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p className='column-title'>
              High 24
              <Tooltip title='Highest price point in last 24h' color='error'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
            <p className='column-title'>
              24h price change
              <Tooltip title='Price change in %' color='error'>
                <InfoSharpIcon fontSize='small'></InfoSharpIcon>
              </Tooltip>
            </p>
          </Grid>
          <Grid item xs={3} md={2} lg={2}>
            <p>{cryptoData[0]?.low_24h}</p>
            <p>{cryptoData[0]?.high_24h}</p>
            <p>{cryptoData[0]?.price_change_percentage_24h}</p>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <div className='grid-container-details'>
              <div className='grid-item-details'>Website</div>
              <div className='grid-item-details'>
                <a
                  href={`https://coinmarketcap.com/nl/currencies/${cryptoData[0]?.name}`}
                >
                  coinmarketcap.com
                </a>
              </div>
              <div className='grid-item-details'>Social media</div>
              <div className='rounded-corners'>
                <a href={`https://www.reddit.com/r/${cryptoData[0]?.name}`}>Reddit</a>
              </div>
              <div></div>
              <div className='rounded-corners'>
                <a href={`https://twitter.com/search?q=%23/${cryptoData[0]?.name}`}>
                  Twitter
                </a>
              </div>
              <div className='grid-item-details'>Source code</div>
              <div className='grid-item-details'>
                <a href={`https://github.com/${cryptoData[0]?.name}`}>Github</a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <h2>
              {cryptoData[0]?.name} Price Graph ({cryptoData[0]?.name}/USD)
            </h2>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className='grid-container'>
              <DetailsGraph 
                graphData={graphData}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
