import { Dayjs } from 'dayjs';

export type CreateExpenseFormFieldsType = {
  date: Dayjs;

  // Может быть null, но форма не позволит отправить
  categoryId: string;
  value: string;
  description: string;
};
