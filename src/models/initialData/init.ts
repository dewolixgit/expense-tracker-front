import { createEvent, sample } from 'effector';

import { getInitialDataFx } from './';

import { getCategoriesFx } from 'models/categories';
import { getExpensesFx } from 'models/expenses';
import { UserType } from 'models/user';

getInitialDataFx.use(async ({ token }) => {
  try {
    await getCategoriesFx(token);

    await getExpensesFx({ token });
  } catch (e) {
    console.log(e);
  }
});

export const getInitialData = createEvent<Pick<UserType, 'token'>>();

sample({
  source: getInitialData,
  target: getInitialDataFx,
});
