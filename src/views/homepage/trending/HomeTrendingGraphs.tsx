import { useEffect, useState } from 'react';
import {
  AreaChart,
  CartesianGrid,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
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

  function setGraphColor (day1: number, day7: number): string {
    if (day1 < day7) {
        return graphColorUpOrDown = '#6495ED'
    } else {
        return graphColorUpOrDown = '#6495ED'
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
    
  }
  const xx = setGraphColor(day1, day7)
  console.log(xx)

  return (
    <>
      {/* <AreaChart width={230} height={150} data={arrayOfObjects}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor="#8884d8" />
            <stop offset='95%' stopColor="#8884d8" />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} vertical={false} />
        <Area type="monotone" dataKey="uv" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart> */}
      {/* <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={arrayOfObjects}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
    
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}
    </>
  );
};

export default HomeTrendingGraphs;
