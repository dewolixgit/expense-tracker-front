import { createEffect, createStore } from 'effector';

import { defaultExpenses } from 'config/expenses';
import {
  ExpenseCreationPayload,
  ExpenseDeletingPayload,
  ExpenseEditingPayload,
  ExpenseType,
} from 'models/expenses/types';

export const $expenses = createStore<ExpenseType[]>(defaultExpenses);

export const getExpensesFx = createEffect<void, ExpenseType[]>();

export const createExpenseFx = createEffect<
  ExpenseCreationPayload,
  ExpenseType[]
>();

export const editExpenseFx = createEffect<ExpenseEditingPayload, ExpenseType>();

export const deleteExpenseFx = createEffect<
  ExpenseDeletingPayload,
  ExpenseType[] | null
>();
