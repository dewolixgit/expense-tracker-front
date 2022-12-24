import { Dayjs } from 'dayjs';
import { createEvent, sample } from 'effector';

import { $categoriesMap } from 'models/categories';
import { CategoriesMapType } from 'models/categories/types';
import { ExpenseGettingPayload, getExpensesFx } from 'models/expenses';
import { $user, UserType } from 'models/user';
import getZeroLocalString from 'utils/getZeroLocalString';

export const pickDate = createEvent<Dayjs>();

export const pickRange = createEvent<[Dayjs, Dayjs]>();

sample({
  clock: pickDate,
  source: { user: $user, categoriesMap: $categoriesMap },
  fn: (
    { user, categoriesMap },
    date
  ): ExpenseGettingPayload &
    Pick<UserType, 'token'> & {
      categoriesMap?: CategoriesMapType;
    } => ({
    token: user.token,
    categoriesMap,
    startDateString: getZeroLocalString(date),
  }),
  target: getExpensesFx,
});

sample({
  clock: pickRange,
  source: { user: $user, categoriesMap: $categoriesMap },
  fn: (
    { user, categoriesMap },
    dates
  ): ExpenseGettingPayload &
    Pick<UserType, 'token'> & {
      categoriesMap?: CategoriesMapType;
    } => ({
    token: user.token,
    categoriesMap,
    startDateString: getZeroLocalString(dates[0]),
    endDateString: getZeroLocalString(dates[1]),
  }),
  target: getExpensesFx,
});
