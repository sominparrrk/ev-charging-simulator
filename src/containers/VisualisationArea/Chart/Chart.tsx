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
  data: number[][] | undefined;
  selectedValue: string;
}

const Chart = ({ data, selectedValue }: ChartProps) => {
  const { width, height } = useWindowSize();
  const transformedData = data?.map((innerData) =>
    innerData.map((value, i) => ({ name: i + 1, kWh: value }))
  );

  return (
    <LineChart
      width={width - 48}
      height={height - 480}
      data={transformedData?.[Number(selectedValue)]}
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
      <Line
        type='monotone'
        dataKey='kWh'
        stroke='#16a34a'
        activeDot={{ r: 5 }}
      />
    </LineChart>
  );
};

export default Chart;
