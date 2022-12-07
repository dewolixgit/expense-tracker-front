import { getInitialDataFx } from './';

import { $categories, getCategoriesFx } from 'models/categories';
import { $expenses, getExpensesFx } from 'models/expenses';
import sleep from 'utils/sleep';

getInitialDataFx.use(async () => {
  await sleep();
  await getCategoriesFx();
  await getExpensesFx();

  return {
    categories: $categories,
    expenses: $expenses,
  };
});
