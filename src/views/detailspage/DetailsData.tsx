import { Grid, LinearProgress, linearProgressClasses, styled, Tooltip } from '@mui/material';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import { useTranslation } from 'react-i18next';
import { ICryptoData } from './../../common/interfaces/interfaces';

interface IProps {
  cryptoData: ICryptoData[];
}

const DetailsData = (props: IProps) => {
  const { cryptoData } = props;

  const [t, i18n] = useTranslation();

  const progressBarPercentage =
    ((cryptoData[0]?.current_price - cryptoData[0]?.low_24h) * 100) /
    (cryptoData[0]?.high_24h - cryptoData[0]?.low_24h);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));

  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <p className="rounded-corners">Rank#: {cryptoData[0]?.market_cap_rank}</p>
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <div className="grid-container">
          <div className="current-price">${cryptoData[0]?.current_price}</div>
          <div className="grid-item">
            {cryptoData[0]?.price_change_percentage_24h}%
            {cryptoData[0]?.price_change_percentage_24h > 0 ? (
              <NorthEastIcon fontSize="small" color="secondary"></NorthEastIcon>
            ) : (
              <SouthEastIcon fontSize="small" color="error"></SouthEastIcon>
            )}
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <img height="30" width="30" src={cryptoData[0]?.image} alt="" />
        {cryptoData[0]?.name} ({cryptoData[0]?.symbol})
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <p>
          <b>{cryptoData[0]?.low_24h}</b>
        </p>
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <p className="progress-bar"> 24h range</p>
      </Grid>
      <Grid item xs={4} md={4} lg={4}>
        <p className="progress-bar-right"> {cryptoData[0]?.high_24h}</p>
      </Grid>
      <Grid item xs={12} md={12} lg={12} paddingBottom={1}>
        <BorderLinearProgress
          variant="determinate"
          color="secondary"
          value={progressBarPercentage}
        />
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <p>
          {t('Details.data.marketCap')}
          <Tooltip title="Market Cap = Current Price x Circulating Supply" color="primary">
            <InfoSharpIcon fontSize="small"></InfoSharpIcon>
          </Tooltip>
        </p>
        <p>
          {t('Details.data.totalVolume')}
          <Tooltip title="Total volume of the crypto" color="primary">
            <InfoSharpIcon fontSize="small"></InfoSharpIcon>
          </Tooltip>
        </p>
        <p>
          {t('Details.data.fdv')}
          <Tooltip title="FDV = Current Price x Max Supply" color="primary">
            <InfoSharpIcon fontSize="small"></InfoSharpIcon>
          </Tooltip>
        </p>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <p>{cryptoData[0]?.market_cap}</p>
        <p>{cryptoData[0]?.total_volume}</p>
        <p>{cryptoData[0]?.fully_diluted_valuation}</p>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <p>
          {t('Details.data.low24')}
          <Tooltip title="Lowest pricepoint in last 24h" color="primary">
            <InfoSharpIcon fontSize="small"></InfoSharpIcon>
          </Tooltip>
        </p>
        <p>
          {t('Details.data.high24')}
          <Tooltip title="Highest price point in last 24h" color="primary">
            <InfoSharpIcon fontSize="small"></InfoSharpIcon>
          </Tooltip>
        </p>
        <p>
          {t('Details.data.24PriceChange')}
          <Tooltip title="Price change in %" color="primary">
            <InfoSharpIcon fontSize="small"></InfoSharpIcon>
          </Tooltip>
        </p>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
        <p>{cryptoData[0]?.low_24h}</p>
        <p>{cryptoData[0]?.high_24h}</p>
        <p>{cryptoData[0]?.price_change_percentage_24h}</p>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <div className="grid-container-details">
          <div className="grid-item-details">Website</div>
          <div className="grid-item-details">
            <a href={`https://coinmarketcap.com/nl/currencies/${cryptoData[0]?.name}`}>
              coinmarketcap.com
            </a>
          </div>
          <div className="grid-item-details">Social media</div>
          <div className="rounded-corners">
            <a href={`https://www.reddit.com/r/${cryptoData[0]?.name}`}>Reddit</a>
          </div>
          <div></div>
          <div className="rounded-corners">
            <a href={`https://twitter.com/search?q=%23/${cryptoData[0]?.name}`}>Twitter</a>
          </div>
          <div></div>
          <div className="rounded-corners">
            <a href={`https://www.instagram.com/explore/tags/${cryptoData[0]?.name}`}>Instagram</a>
          </div>
          <div className="grid-item-details">Source code</div>
          <div className="grid-item-details">
            <a href={`https://github.com/${cryptoData[0]?.name}`}>Github</a>
          </div>
        </div>
      </Grid>
    </>
  );
};

export default DetailsData;
