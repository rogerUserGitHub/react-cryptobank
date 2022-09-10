// import { Grid } from "@mui/material";
// import { Tooltip } from "recharts";
import { Chip, Container, Grid, Tooltip } from '@mui/material';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';

const DetailsData = (props: any) => {
  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <p className='rounded-corners'>Rank#: {props.cryptoData[0]?.market_cap_rank}</p>
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <div className='grid-container'>
          <div className='current-price'>${props.cryptoData[0]?.current_price}</div>
          <div className='grid-item'>
            {props.cryptoData[0]?.price_change_percentage_24h}%
            {props.cryptoData[0]?.price_change_percentage_24h > 0 ? (
              <NorthEastIcon
                fontSize='small'
                color='secondary'
              ></NorthEastIcon>
            ) : (
              <SouthEastIcon fontSize='small' color='error'></SouthEastIcon>
            )}
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <img height='30' width='30' src={props.cryptoData[0]?.image} alt='' />
        {props.cryptoData[0]?.name} ({props.cryptoData[0]?.symbol})
      </Grid>

      <Grid item xs={3} md={2} lg={2}>
        <p className='column-title'>
          Market cap
          <Tooltip
            title='Market Cap = Current Price x Circulating Supply'
            color='primary'
          >
            <InfoSharpIcon fontSize='small'></InfoSharpIcon>
          </Tooltip>
        </p>
        <p className='column-title'>
          Total volume
          <Tooltip title='Total volume of the crypto' color='primary'>
            <InfoSharpIcon fontSize='small'></InfoSharpIcon>
          </Tooltip>
        </p>
        <p className='column-title'>
          Fully Diluted Val.
          <Tooltip title='FDV = Current Price x Max Supply' color='primary'>
            <InfoSharpIcon fontSize='small'></InfoSharpIcon>
          </Tooltip>
        </p>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <p>{props.cryptoData[0]?.market_cap}</p>
        <p>{props.cryptoData[0]?.total_volume}</p>
        <p>{props.cryptoData[0]?.fully_diluted_valuation}</p>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <p className='column-title'>
          Low 24
          <Tooltip title='Lowest pricepoint in last 24h' color='primary'>
            <InfoSharpIcon fontSize='small'></InfoSharpIcon>
          </Tooltip>
        </p>
        <p className='column-title'>
          High 24
          <Tooltip title='Highest price point in last 24h' color='primary'>
            <InfoSharpIcon fontSize='small'></InfoSharpIcon>
          </Tooltip>
        </p>
        <p className='column-title'>
          24h price change
          <Tooltip title='Price change in %' color='primary'>
            <InfoSharpIcon fontSize='small'></InfoSharpIcon>
          </Tooltip>
        </p>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <p>{props.cryptoData[0]?.low_24h}</p>
        <p>{props.cryptoData[0]?.high_24h}</p>
        <p>{props.cryptoData[0]?.price_change_percentage_24h}</p>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <div className='grid-container-details'>
          <div className='grid-item-details'>Website</div>
          <div className='grid-item-details'>
            <a
              href={`https://coinmarketcap.com/nl/currencies/${props.cryptoData[0]?.name}`}
            >
              coinmarketcap.com
            </a>
          </div>
          <div className='grid-item-details'>Social media</div>
          <div className='rounded-corners'>
            <a href={`https://www.reddit.com/r/${props.cryptoData[0]?.name}`}>Reddit</a>
          </div>
          <div></div>
          <div className='rounded-corners'>
            <a href={`https://twitter.com/search?q=%23/${props.cryptoData[0]?.name}`}>
              Twitter
            </a>
          </div>
          <div></div>
          <div className='rounded-corners'>
            <a
              href={`https://www.instagram.com/explore/tags/${props.cryptoData[0]?.name}`}
            >
              Instagram
            </a>
          </div>
          <div className='grid-item-details'>Source code</div>
          <div className='grid-item-details'>
            <a href={`https://github.com/${props.cryptoData[0]?.name}`}>Github</a>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default DetailsData;