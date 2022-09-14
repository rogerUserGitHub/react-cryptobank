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

  function setGraphColor (day1: number, day7: number) {
    if (day1 < day7) {
        graphColorUpOrDown = '#DC143C'
    } else {
        graphColorUpOrDown = '#FAEBD7'
    }
  }

  const arrayOfObjects = [];
  let day1;
  let day7;
  let graphColorUpOrDown;
  for (var i = 0; i < graphDataPerDaysAndType?.length; i++) {
    arrayOfObjects.push({
      pv: graphDataPerDaysAndType[i],
      name: [i],

      
    })
    if (i === 0) {
        day1 = graphDataPerDaysAndType[i];
    }
    if (i === 6) {
        day7 = graphDataPerDaysAndType[i];
    }
    

    setGraphColor(day1, day7)
  }

  return (
    <>
      <AreaChart width={230} height={150} data={arrayOfObjects}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor={graphColorUpOrDown} />
            <stop offset='95%' stopColor={graphColorUpOrDown} />
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
