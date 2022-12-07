import dayjs from 'dayjs';

import { normalizeCategory } from 'models/categories/normalizers';
import { CategoriesMapType } from 'models/categories/types';
import { ApiExpenseType, ExpenseType } from 'models/expenses/types';

export const normalizeExpense = (
  data: ApiExpenseType,
  categoriesMap?: CategoriesMapType
): ExpenseType => ({
  id: data.id,
  category:
    categoriesMap?.[data.category.id] ?? normalizeCategory(data.category),
  description: data.description,
  date: dayjs(data.date),
});
