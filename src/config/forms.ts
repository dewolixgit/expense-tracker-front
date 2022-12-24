import dayjs from 'dayjs';

import { CategoryType } from 'config/mock';

export const INITIAL_COLOR = '#000';

export const ADD_CATEGORY_INITIAL_VALUES = {
  name: '',
  color: INITIAL_COLOR,
};

export const getCreateExpenseInitialValues = (
  firstCategoryId: CategoryType['id']
) => ({
  category: firstCategoryId,
  date: dayjs(),
  description: '',
});

export const COMMON_REQUIRED_MESSAGE = 'Нужно заполнить это поле';
