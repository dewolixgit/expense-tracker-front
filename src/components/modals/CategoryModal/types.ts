import { CategoryType } from 'models/categories/types';

export type ChangeCategoryFieldsType = {
  name: string;
  color: string;
};

export type EditCategoryFormPayloadType = ChangeCategoryFieldsType &
  Pick<CategoryType, 'id'>;
