import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    // Legend
  );
  const Utils = {
    months: ({ count }) => {
      const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
  
      // Return the first 'count' months
      return monthNames.slice(0, count);
    },
  };
  const labels = Utils.months({count: 12});
const LineChart = ({thisYear, lastYear}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Last Year',
        data: lastYear,
        backgroundColor: ['rgba(211, 211, 211, 1)'],
      },
      {
        label: 'This Year',
        data: thisYear,
        backgroundColor: ['rgba(255, 153, 0, 1)'],
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;