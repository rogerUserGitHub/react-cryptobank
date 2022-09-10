import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ICryptoData, IGraphData } from '../../common/interfaces/interfaces';
import { Chip, Container, Grid, Tooltip } from '@mui/material';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import DetailsGraph from './DetailsGraph';
import DetailsGraphFilter from './DetailsGraphFilter';
import DetailsData from './DetailsData';

export default function Details() {
  let params = useParams();

  const [cryptoData, setCryptoData] = useState<ICryptoData[]>([]);
  //const [graphData, setGraphData] = useState<IGraphData[]>([]);
  //const [graphDays, setGraphDays] = useState<number>(7)

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

  return (
    <>
      <Container>
        <Grid container>
          <DetailsData cryptoData={cryptoData} />

          <Grid item xs={12} md={12} lg={12}>
            <h2>
              {cryptoData[0]?.name} Price Graph ({cryptoData[0]?.name}/USD)
            </h2>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div>
              <DetailsGraphFilter params={params} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
