import { Grid } from '@mui/material';
import { Tooltip } from 'recharts';
import { IGraphData } from '../../common/interfaces/interfaces';
import { ICryptoData } from './../../common/interfaces/interfaces';

interface IProps {
  cryptoData: ICryptoData[];
}

const DetailsGraphData = (props: IProps) => {
  const { cryptoData } = props;
  console.log({ cryptoData });

  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <div className='grid-container-header'>
          <div >{cryptoData[0]?.name}</div>
        </div>
        <div className='grid-container-details'>
          <div className='grid-item-details'>Current price</div>
          <div className='grid-item-details'>{cryptoData[0]?.current_price}</div>
          <div className='grid-item-details'>Market cap rank</div>
          <div className='grid-item-details'>{cryptoData[0]?.market_cap_rank}</div>
          <div className='grid-item-details'>Circulating supply</div>
          <div className='grid-item-details'>{cryptoData[0]?.total_supply}</div>
          <div className='grid-item-details'>24h low</div>
          <div className='grid-item-details'>{cryptoData[0]?.low_24h}</div>
          <div className='grid-item-details'>24h high</div>
          <div className='grid-item-details'>{cryptoData[0]?.high_24h}</div>
          <div className='grid-item-details'>All-time high</div>
          <div className='grid-item-details'>{cryptoData[0]?.ath}</div>
          <div className='grid-item-details'>All-time low</div>
          <div className='grid-item-details'>{cryptoData[0]?.atl}</div>
          <div className='grid-item-details'>price change %</div>
          <div className='grid-item-details'>{cryptoData[0]?.price_change_percentage_24h}</div>
          <div className='grid-item-details'>Last updated</div>
          <div className='grid-item-details'>{cryptoData[0]?.last_updated}</div>
        </div>
      </Grid>
    </>
  );
};

export default DetailsGraphData;
