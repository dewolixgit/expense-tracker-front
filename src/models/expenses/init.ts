import dayjs from 'dayjs';

import {
  $expenses,
  createExpenseFx,
  deleteExpenseFx,
  editExpenseFx,
  getExpensesFx,
} from './';

// todo
// todo normalize
getExpensesFx.use(async () => []);

// todo
// todo normalize
createExpenseFx.use(async ({ description, date, category }) => [
  {
    id: 'abc',
    date,
    description,
    category,
  },
]);

$expenses.on(createExpenseFx.doneData, (_, expenses) => expenses);

// todo
// todo normalize
editExpenseFx.use(async ({ id, date, description, category }) => ({
  id,
  date: date ?? dayjs(),
  description: description ?? 'abc',
  category: category ?? {
    id: 'abcca',
    color: 'abc',
    name: 'ajid',
  },
}));

$expenses.on(
  editExpenseFx.done,
  (
    prevExpenses,
    { params: { index: editedExpenseIndex }, result: editExpense }
  ) => {
    prevExpenses[editedExpenseIndex] = editExpense;
    return prevExpenses;
  }
);

// todo
// todo normalize
deleteExpenseFx.use(async (deleteExpenseId) => null);

$expenses.on(deleteExpenseFx.doneData, (prevExpenses, apiDeletingResponse) => {
  if (apiDeletingResponse === null) {
    return prevExpenses;
  }
});
