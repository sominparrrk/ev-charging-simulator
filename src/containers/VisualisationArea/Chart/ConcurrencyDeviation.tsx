import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'; // Used recharts library - more info > https://recharts.org
import useWindowSize from '../../../hooks/useWindowSize';

interface ChartProps {
  data: number[] | undefined;
}

const ConcurrencyDeviation = ({ data }: ChartProps) => {
  const { width, height } = useWindowSize();
  const transformedData = data?.map((innerData, i) => ({
    name: `Chargepoint ${i + 1}`,
    percentage: innerData,
  }));

  return (
    <LineChart
      width={width - 64}
      height={height - 480}
      data={transformedData}
      margin={{
        top: 5,
        right: 30,
        left: 10,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='percentage' stroke='#8884d8' />
    </LineChart>
  );
};

export default ConcurrencyDeviation;
