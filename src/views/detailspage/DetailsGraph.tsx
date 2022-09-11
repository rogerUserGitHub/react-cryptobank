import { Grid } from '@mui/material';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
import Spinner from '../../common/components/Spinner';
import { IGraphData } from '../../common/interfaces/interfaces';

interface IProps {
  graphData: IGraphData[];
}

const DetailsGraph = (props: any) => {
  const graphDataCategory = props?.graphData?.prices;

  if (!graphDataCategory) {
    return (
      <Grid item xs={12} md={12} lg={8}>
        <div className='grid-container-spinner'>
          <Spinner />
        </div>
      </Grid>
    );
  }

  const arrangedGraphDataCategory = graphDataCategory.map((a: any[]) => a[1]);

  const arrayOfObjects = [];
  for (var i = 0; i < arrangedGraphDataCategory.length; i++) {
    arrayOfObjects.push({
      pv: arrangedGraphDataCategory[i],
      name: [i],
    });
  }

  console.log(arrayOfObjects);

  let low = Math.min(...arrayOfObjects.map(o => o.pv));
  low = Math.trunc(low);

  let high = Math.max(...arrayOfObjects.map(o => o.pv));
  high = Math.trunc(high);

  return (
    <AreaChart
      width={750}
      height={500}
      data={arrayOfObjects}
      margin={{ top: 30, bottom: 30 }}
    >
      <defs>
        <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' />
      <YAxis type='number' domain={['auto', 'auto']} />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='pv'
        stroke='#82ca9d'
        fillOpacity={1}
        fill='url(#colorPv)'
      />
    </AreaChart>
  );
};

export default DetailsGraph;
