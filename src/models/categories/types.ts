export type ApiCategoryType = {
  id: string;
  name: string;
  color: string;
};

export type CategoryType = {
  id: string;
  name: string;
  color: string;
};

export type CategoriesMapType = Record<CategoryType['id'], CategoryType>;

export type CategoryCreatingPayloadType = Omit<CategoryType, 'id'>;

export type CategoryEditingPayLoadType = Pick<CategoryType, 'id'> &
  Partial<Omit<CategoryType, 'id'>>;

export type CategoryDeletingPayloadType = Pick<CategoryType, 'id'>;
