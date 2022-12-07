import { Dayjs } from 'dayjs';

import { ApiCategoryType, CategoryType } from 'models/categories/types';

export type ApiExpenseType = {
  id: string;
  category: ApiCategoryType;
  description: string;
  date: string;
};

export type ExpenseType = {
  id: string;
  category: CategoryType;
  description: string;
  date: Dayjs;
};

export type ExpenseCreationPayload = Omit<ExpenseType, 'id'>;

export type ExpenseEditingPayload = Pick<ExpenseType, 'id'> &
  Partial<Omit<ExpenseType, 'id'>> & {
    index: number;
  };

export type ExpenseDeletingPayload = ExpenseType['id'];
