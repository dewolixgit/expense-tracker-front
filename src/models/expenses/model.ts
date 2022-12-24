import { createEffect, createEvent, createStore } from 'effector';

import { defaultExpenses } from 'config/expenses';
import { CategoriesMapType } from 'models/categories/types';
import {
  ExpenseCreationPayload,
  ExpenseDeletingPayload,
  ExpenseGettingPayload,
  ExpenseType,
} from 'models/expenses/types';
import { UserType } from 'models/user';

export const $expenses = createStore<ExpenseType[]>(defaultExpenses);

export const deleteExpense = createEvent<
  Pick<ExpenseType, 'id'> & { onSuccess: VoidFunction }
>();

export const getExpensesFx = createEffect<
  ExpenseGettingPayload &
    Pick<UserType, 'token'> & {
      categoriesMap?: CategoriesMapType;
    },
  ExpenseType[]
>();

// export const conditionalGetExpensesFx = createEffect<
//   ExpenseGettingPayload &
//     Pick<UserType, 'token'> & {
//       categoriesMap?: CategoriesMapType;
//     } & { toRequest },
//   void
// >();

export const createExpenseFx = createEffect<
  ExpenseCreationPayload &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction },
  ExpenseType | null
>();

export const deleteExpenseFx = createEffect<
  ExpenseDeletingPayload &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction },
  void
>();
