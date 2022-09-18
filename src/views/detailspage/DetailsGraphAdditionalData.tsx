import { Grid } from '@mui/material';
import { ICryptoData } from '../../common/interfaces/interfaces';

interface IProps {
  cryptoData: ICryptoData[];
}

const DetailsGraphAdditionalData = (props: IProps) => {
  const { cryptoData } = props;
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
          <div className='grid-item-details'>Price change %</div>
          <div className='grid-item-details'>{cryptoData[0]?.price_change_percentage_24h}</div>
          <div className='grid-item-details'>Total supply</div>
          <div className='grid-item-details'>{cryptoData[0]?.total_supply}</div>
          <div className='grid-item-details'>Total volume</div>
          <div className='grid-item-details'>{cryptoData[0]?.total_volume}</div>
        </div>
      </Grid>
    </>
  );
};

export default DetailsGraphAdditionalData;
