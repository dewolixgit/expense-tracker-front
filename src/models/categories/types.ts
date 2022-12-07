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
  Partial<Omit<CategoryType, 'id'>> & {
    index: number;
  };

export type CategoryDeletingPayloadType = CategoryType['id'];

/**
 * Если при удалении категории были удалены некоторые расходы,
 * api вернёт список категорий. Иначе укажет, что удаления расходов не было
 */
export type CategoryDeletingApiResponseType =
  | {
      expenseDeletingTriggered: true;
      categories: [];
    }
  | {
      expenseDeletingTriggered: false;
    };
