// eslint-disable-next-line import/named
import { ChartData } from 'chart.js';
import { sample } from 'effector';

import {
  $expenses,
  ApiExpenseType,
  createExpenseFx,
  deleteExpense,
  deleteExpenseFx,
  ExpenseDeletingPayload,
  getExpensesFx,
} from './';

import { ENDPOINTS } from 'config/endpoints';
import { $categoriesMap } from 'models/categories';
import { CategoryType } from 'models/categories/types';
import {
  normalizeExpense,
  normalizeExpenseHavingCategory,
} from 'models/expenses/normalizers';
import { triggerMessage } from 'models/messages';
import { $user, UserType } from 'models/user';
import { $chartConfig } from 'pages/Spending/components/SpendingSection/components/Chart/model';
import { getAuthHeader } from 'utils/getAuthHeader';
import { request } from 'utils/request';

getExpensesFx.use(
  async ({ token, endDateString, startDateString, categoriesMap }) => {
    try {
      const response = await request({
        ...ENDPOINTS.expenses,
        headers: getAuthHeader(token),
        body: {
          startDate: startDateString,
          endDate: endDateString,
        },
      });

      if (!response || !response.expenses) {
        triggerMessage('Произошла ошибка');
        return [];
      }

      console.log(
        'getExpensesFx categoriesMap response.expenses',
        categoriesMap,
        response.expenses
      );

      return categoriesMap
        ? response.expenses.map((expense: ApiExpenseType) =>
            normalizeExpense(expense, categoriesMap)
          )
        : response.expenses.map(normalizeExpense);
    } catch (e: any) {
      console.log(e);
      triggerMessage(e.message ?? 'Произошла ошибка');
      return [];
    }
  }
);

$expenses.on(getExpensesFx.doneData, (_, gottenExpenses) => {
  console.log('gotten in reaction', gottenExpenses);
  return gottenExpenses;
});

createExpenseFx.use(
  async ({ description, date, category, token, value, onSuccess }) => {
    try {
      const response = await request({
        ...ENDPOINTS.createExpense,
        headers: getAuthHeader(token),
        body: {
          categoryId: category.id,
          description,
          date,
          value,
        },
      });

      if (!response || !response.expense) {
        triggerMessage('Произошла ошибка');
        return null;
      }

      onSuccess();
      return normalizeExpenseHavingCategory(response.expense, category);
    } catch (e: any) {
      triggerMessage(e.message ?? 'Произошла ошибка');
      return null;
    }
  }
);

$expenses.on(createExpenseFx.doneData, (expanses, created) => {
  if (!created) {
    return undefined;
  }

  expanses.push(created);
  expanses.sort((a, b) => b.date.valueOf() - a.date.valueOf());
  return expanses.slice();
});

// // todo
// // todo normalize
// editExpenseFx.use(async ({ id, date, description, category }) => ({
//   id,
//   date: date ?? dayjs(),
//   description: description ?? 'abc',
//   category: category ?? {
//     id: 'abcca',
//     color: 'abc',
//     name: 'ajid',
//   },
// }));

// $expenses.on(
//   editExpenseFx.done,
//   (
//     prevExpenses,
//     { params: { index: editedExpenseIndex }, result: editExpense }
//   ) => {
//     prevExpenses[editedExpenseIndex] = editExpense;
//     return prevExpenses;
//   }
// );

deleteExpenseFx.use(async ({ token, id, onSuccess }) => {
  try {
    const response = await request({
      ...ENDPOINTS.deleteExpense,
      headers: getAuthHeader(token),
      body: {
        id,
      },
    });

    if (!response || !response.message) {
      triggerMessage('Произошла ошибка');
      return;
    }

    onSuccess();
    triggerMessage(response.message);
  } catch (e: any) {
    triggerMessage(e.message ?? 'Произошла ошибка');
  }
});

$expenses.on(deleteExpenseFx.done, (prevExpenses, { params: { id } }) =>
  prevExpenses.filter((expense) => expense.id !== id)
);

sample({
  clock: deleteExpense,
  source: $user,
  fn: (
    user,
    payload
  ): ExpenseDeletingPayload &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction } => ({
    id: payload.id,
    onSuccess: payload.onSuccess,
    token: user.token,
  }),
  target: deleteExpenseFx,
});

sample({
  source: { expanses: $expenses, categoriesMap: $categoriesMap },
  fn: ({ expanses, categoriesMap }): ChartData<'pie', number[], string> => {
    const mapCategoryMoney: Record<CategoryType['id'], number> = Object.keys(
      categoriesMap
    ).reduce(
      (acc, categoryId) => ({
        ...acc,
        [categoryId]: 0,
      }),
      {} as Record<CategoryType['id'], number>
    );

    expanses.forEach((expense) => {
      mapCategoryMoney[expense.category.id] += expense.value;
    });

    const labels = Object.values(categoriesMap).map(
      (category) => category.name
    );
    const colors = Object.keys(categoriesMap).map(
      (categoryId) => categoriesMap[categoryId].color
    );
    const dataValues = Object.values(mapCategoryMoney);

    return {
      labels,
      datasets: [
        {
          data: dataValues,
          backgroundColor: colors,
        },
      ],
    };
  },
  target: $chartConfig,
});
