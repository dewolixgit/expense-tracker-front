import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { useStore } from 'effector-react';
import * as React from 'react';
import { Pie } from 'react-chartjs-2';

import { $chartConfig } from 'pages/Spending/components/SpendingSection/components/Chart/model';

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
    },
  ],
};

const Chart: React.FC = () => {
  const chartConfig = useStore($chartConfig);

  return (
    <div
      style={{
        width: '100%',
        height: 380,
      }}
    >
      <Pie data={chartConfig} />
    </div>
  );
};

export default Chart;
