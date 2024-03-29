import { useEffect, useState } from 'react';
import { AreaChart, CartesianGrid, Area } from 'recharts';

interface IProps {
  cryptoName?: string;
}

const HomeTrendingGraphs = (props: IProps) => {
  const [lineChartData, setLineChartData] = useState([] as any);
  const [loading, setLoading] = useState(true);

  const { cryptoName } = props;

  // GET request for graph data
  const url = `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=7&interval=daily`;

  const fetchHomeTrendingGraphData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setLineChartData(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const graphDataPerDaysAndType = lineChartData?.prices?.map((a: any[]) => a[1]);

  const arrayOfObjects = [];
  for (var i = 0; i < graphDataPerDaysAndType?.length; i++) {
    arrayOfObjects.push({
      pv: graphDataPerDaysAndType[i],
      name: [i],
    });
  }

  useEffect(() => {
    setLoading(true);
    fetchHomeTrendingGraphData();
  }, []);

  return (
    <>
      <AreaChart width={230} height={150} data={arrayOfObjects}>
        <defs>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='05%' stopColor='#40E0D0' />
            <stop offset='95%' stopColor='honeydew' />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal={false} vertical={false} />
        <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='url(#colorPv)' />
      </AreaChart>
    </>
  );
};

export default HomeTrendingGraphs;
