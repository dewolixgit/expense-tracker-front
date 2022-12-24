import { ApiCategoryType, CategoryType } from './types';

export const normalizeCategory = (data: ApiCategoryType): CategoryType => ({
  id: data.id,
  name: data.name,
  color: data.color,
});
