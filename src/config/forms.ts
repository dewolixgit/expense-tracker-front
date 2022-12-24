import dayjs from 'dayjs';

export const INITIAL_COLOR = '#000';

export const ADD_CATEGORY_INITIAL_VALUES = {
  name: '',
  color: INITIAL_COLOR,
};

export const getCreateExpenseInitialValues = () => ({
  category: null,
  date: dayjs(),
  description: '',
  value: 0,
});

export const COMMON_REQUIRED_MESSAGE = 'Нужно заполнить это поле';
