import dayjs from 'dayjs';

import { normalizeCategory } from 'models/categories/normalizers';
import { CategoriesMapType, CategoryType } from 'models/categories/types';
import { ApiExpenseType, ExpenseType } from 'models/expenses/types';

export const normalizeExpense = (
  data: ApiExpenseType,
  categoriesMap?: CategoriesMapType
): ExpenseType => {
  return {
    id: data.id,
    category:
      categoriesMap?.[data.category.id] ?? normalizeCategory(data.category),
    description: data.description,
    date: dayjs(data.date),
    value: data.value,
  };
};

export const normalizeExpenseHavingCategory = (
  data: ApiExpenseType,
  category: CategoryType
): ExpenseType => ({
  id: data.id,
  description: data.description,
  date: dayjs(data.date),
  value: data.value,
  category,
});
