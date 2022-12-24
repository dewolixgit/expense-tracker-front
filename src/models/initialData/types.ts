import { $categories } from 'models/categories';
import { $expenses } from 'models/expenses';

export type TrackerInitialDataType = {
  categories: typeof $categories;
  expenses: typeof $expenses;
};
