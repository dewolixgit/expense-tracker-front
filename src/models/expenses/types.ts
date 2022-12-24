import { Dayjs } from 'dayjs';

import { ApiCategoryType, CategoryType } from 'models/categories/types';

export type ApiExpenseType = {
  id: string;
  category: ApiCategoryType;
  description: string;
  date: string;
  value: number;
};

export type ExpenseType = {
  id: string;
  category: CategoryType;
  description: string;
  date: Dayjs;
  value: number;
};

export type ExpenseGettingPayload = {
  startDateString?: string;
  endDateString?: string;
};

export type ExpenseCreationPayload = Pick<ExpenseType, 'category'> & {
  description?: string;
  date: string;
  value: number;
};
//
// export type ExpenseEditingPayload = Pick<ExpenseType, 'id'> &
//   Partial<Omit<ExpenseType, 'id'>> & {
//     index: number;
//   };

export type ExpenseDeletingPayload = Pick<ExpenseType, 'id'>;
