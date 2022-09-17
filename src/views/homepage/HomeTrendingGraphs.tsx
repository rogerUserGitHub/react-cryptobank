import { useEffect, useState } from 'react';
import {
  AreaChart,
  CartesianGrid,
  Area,
} from 'recharts';

interface IProps {
    cryptoName?: string
}

const HomeTrendingGraphs = (props: IProps) => {

  const [lineChartData, setLineChartData] = useState([] as any);

  const { cryptoName } = props;

  // GET request for graph data
  const url = `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=7&interval=daily`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setLineChartData(data);
      })
      .catch(err => console.error(err));
  }, []);

  const graphDataPerDaysAndType = lineChartData?.prices?.map((a: any[]) => a[1]);

  const arrayOfObjects = [];
  for (var i = 0; i < graphDataPerDaysAndType?.length; i++) {
    arrayOfObjects.push({
      pv: graphDataPerDaysAndType[i],
      name: [i],
    })
  }

  return (
    <>
      <AreaChart width={230} height={150} data={arrayOfObjects}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='10%' stopColor='#7b6df3' />
            <stop offset='90%' stopColor='#7b6df3' />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} vertical={false} />
        <Area
          type='monotone'
          dataKey='pv'
          stroke='#82ca9d'
          fill='url(#colorPv)'
        />
      </AreaChart>
    </>
  );
};

export default HomeTrendingGraphs;
