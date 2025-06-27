import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ICryptoData } from '../../common/interfaces/interfaces';

interface IProps {
  cryptoData: ICryptoData[];
}

const DetailsGraphAdditionalData = (props: IProps) => {
  const { cryptoData } = props;

  const [t, i18n] = useTranslation();

  return (
    <>
      <Grid item xs={12} md={12} lg={12}>
        <div className="grid-container-header">
          <div>{cryptoData[0]?.name}</div>
        </div>
        <div className="grid-container-details">
          <div className="grid-item-details-title"> {t('Details.graph.currentPrice')}</div>
          <div className="grid-item-details">{cryptoData[0]?.current_price}</div>
          <div className="grid-item-details-title">{t('Details.graph.rank')}</div>
          <div className="grid-item-details">{cryptoData[0]?.market_cap_rank}</div>
          <div className="grid-item-details-title">{t('Details.graph.circulatingSupply')}</div>
          <div className="grid-item-details">{cryptoData[0]?.total_supply}</div>
          <div className="grid-item-details-title">{t('Details.graph.low24')}</div>
          <div className="grid-item-details">{cryptoData[0]?.low_24h}</div>
          <div className="grid-item-details-title">{t('Details.graph.high24')}</div>
          <div className="grid-item-details">{cryptoData[0]?.high_24h}</div>
          <div className="grid-item-details-title">{t('Details.graph.ath')}</div>
          <div className="grid-item-details">{cryptoData[0]?.ath}</div>
          <div className="grid-item-details-title">{t('Details.graph.atl')}</div>
          <div className="grid-item-details">{cryptoData[0]?.atl}</div>
          <div className="grid-item-details-title">{t('Details.graph.priceChangePerc')}</div>
          <div className="grid-item-details">{cryptoData[0]?.price_change_percentage_24h}</div>
          <div className="grid-item-details-title">{t('Details.graph.totalSupply')}</div>
          <div className="grid-item-details">{cryptoData[0]?.total_supply}</div>
          <div className="grid-item-details-title">{t('Details.graph.totalVolume')}</div>
          <div className="grid-item-details">{cryptoData[0]?.total_volume}</div>
        </div>
      </Grid>
    </>
  );
};

export default DetailsGraphAdditionalData;
