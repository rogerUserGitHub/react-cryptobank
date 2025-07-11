import { Grid } from '@mui/material';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
import Spinner from '../../common/components/Spinner';
import { IGraphData } from '../../common/interfaces/interfaces';
import { useTranslation } from 'react-i18next';

interface IProps {
  graphData: IGraphData[];
  graphTypeData: any;
}

const DetailsGraph = (props: any) => {
  const [t, i18n] = useTranslation();

  const typeOfData = props.graphTypeData;
  let graphDataAfterSwitch = null;

  switch (typeOfData) {
    case 'prices': {
      graphDataAfterSwitch = props?.graphData?.prices;
      break;
    }
    case 'market_caps': {
      graphDataAfterSwitch = props?.graphData?.market_caps;
      break;
    }
    case 'total_volumes': {
      graphDataAfterSwitch = props?.graphData?.total_volumes;
      break;
    }
  }

  if (!graphDataAfterSwitch) {
    return (
      <Grid item xs={12} md={12} lg={8}>
        <div className="grid-container-spinner">
          <Spinner />
        </div>
      </Grid>
    );
  }

  const graphDataPerDaysAndType = graphDataAfterSwitch.map((a: any[]) => a[1]);

  const arrayOfObjects = [];
  for (var i = 0; i < graphDataPerDaysAndType.length; i++) {
    arrayOfObjects.push({
      pv: graphDataPerDaysAndType[i],
      name: [i],
    });
  }

  return (
    <AreaChart width={750} height={500} data={arrayOfObjects} margin={{ top: 30, bottom: 30 }}>
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#40E0D0" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis type="number" domain={['auto', 'auto']} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
  );
};

export default DetailsGraph;
