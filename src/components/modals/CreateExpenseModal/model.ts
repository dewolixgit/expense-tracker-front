import { createEvent, sample } from 'effector';

import { CreateExpenseFormFieldsType } from 'components/modals/CreateExpenseModal/types';
import { $categoriesMap } from 'models/categories';
import { createExpenseFx, ExpenseCreationPayload } from 'models/expenses';
import { $user, UserType } from 'models/user';
import getZeroLocalString from 'utils/getZeroLocalString';

export const finishSubmit = createEvent<
  CreateExpenseFormFieldsType & { onSuccess: VoidFunction }
>();

sample({
  clock: finishSubmit,
  source: { user: $user, categoriesMap: $categoriesMap },
  fn: (
    { user, categoriesMap },
    payload
  ): ExpenseCreationPayload &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction } => {
    return {
      token: user.token,
      date: getZeroLocalString(payload.date),
      category: categoriesMap[payload.categoryId],
      value: Number(payload.value),
      description: payload.description === '' ? undefined : payload.description,
      onSuccess: payload.onSuccess,
    };
  },
  target: createExpenseFx,
});
