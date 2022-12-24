// eslint-disable-next-line import/named
import { ChartData } from 'chart.js';
import { createStore } from 'effector';

export const getDefaultChartConfig = (): ChartData<
  'pie',
  number[],
  string
> => ({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: [],
    },
  ],
});

export const $chartConfig = createStore(getDefaultChartConfig());
