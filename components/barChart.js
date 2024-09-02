import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);
const BarChart = ({international, national}) => {
    const data = {
      labels: ['International', 'National'],
      datasets: [
        {
          label: 'International',
          data: [international, 0],
          backgroundColor: 'rgba(100, 45, 140, 1)',
          borderColor: 'rgba(100, 45, 140, 1)',
          borderWidth: 1,
        },
        {
          label: 'National',
          data: [0, national],
          backgroundColor: 'rgba(23, 122, 189, 1)',
          borderColor: 'rgba(23, 122, 189, 1)',
          borderWidth: 1,
          
        },
      ],
    };
  
    const options = {
      scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        },
      indexAxis: 'y',
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
        },
      },
    };
    return <Bar data={data} options={options} />;
}
export default BarChart;