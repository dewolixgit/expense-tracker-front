import { sample } from 'effector';

import {
  $categories,
  createCategoryFx,
  deleteCategory,
  deleteCategoryFx,
  editCategoryFx,
  getCategories,
  getCategoriesFx,
} from './model';
import { normalizeCategory } from './normalizers';
import { CategoriesMapType, CategoryDeletingPayloadType } from './types';

import { ENDPOINTS } from 'config/endpoints';
import { ExpenseGettingPayload, getExpensesFx } from 'models/expenses';
import { triggerMessage } from 'models/messages';
import { $user, UserType } from 'models/user';
import { getAuthHeader } from 'utils/getAuthHeader';
import { request } from 'utils/request';

getCategoriesFx.use(async (token) => {
  try {
    const response = await request({
      ...ENDPOINTS.categories,
      headers: getAuthHeader(token),
    });

    if (!response || !response.categories) {
      return [];
    }

    return response.categories.map(normalizeCategory);
  } catch (e) {
    triggerMessage('Произошла ошибка');
    return [];
  }
});

$categories.on(
  getCategoriesFx.doneData,
  (_, gottenCategories) => gottenCategories
);

sample({
  clock: getCategories,
  source: $user,
  fn: (user) => user.token,
  target: getCategoriesFx,
});

export const $categoriesMap = $categories.map<CategoriesMapType>((categories) =>
  categories.reduce(
    (acc, category) => ({
      ...acc,
      [category.id]: category,
    }),
    {} as CategoriesMapType
  )
);

createCategoryFx.use(async ({ name, color, token, onSuccess }) => {
  try {
    const response = await request({
      ...ENDPOINTS.createCategory,
      headers: getAuthHeader(token),
      body: {
        name,
        color,
      },
    });

    if (!response || !response.category) {
      triggerMessage('Произошла ошибка');
      return null;
    }

    onSuccess();
    return normalizeCategory(response.category);
  } catch (e: any) {
    triggerMessage(e.message ?? 'Произошла ошибка');
    return null;
  }
});

$categories.on(createCategoryFx.doneData, (prevCategories, createdCategory) =>
  createdCategory ? [...prevCategories, createdCategory] : undefined
);

editCategoryFx.use(async ({ id, name, color, token, onSuccess }) => {
  try {
    const response = await request({
      ...ENDPOINTS.editCategory,
      headers: getAuthHeader(token),
      body: {
        id,
        name,
        color,
      },
    });

    if (!response || !response.category) {
      triggerMessage('Произошла ошибка');
      return null;
    }

    onSuccess();
    return normalizeCategory(response.category);
  } catch (e: any) {
    triggerMessage(e.message ?? 'Произошла ошибка');
    return null;
  }
});

$categories.on(
  editCategoryFx.done,
  (prevCategories, { params: { id }, result: editedCategory }) => {
    if (!editedCategory) {
      return undefined;
    }

    // Некрасиво, но предположим, что категорий не будет очень много
    const index = prevCategories.findIndex((category) => category.id === id);

    // Todo: проверить, нет ли проблем из-за изменения не по ссылке
    prevCategories[index] = editedCategory;
    return prevCategories.slice();
  }
);

sample({
  clock: editCategoryFx.done,
  source: { user: $user, categoriesMap: $categoriesMap },
  fn: ({
    user,
    categoriesMap,
  }): ExpenseGettingPayload &
    Pick<UserType, 'token'> & {
      categoriesMap?: CategoriesMapType;
    } => {
    console.log(categoriesMap);
    return {
      token: user.token,
      categoriesMap: categoriesMap,
    };
  },
  target: getExpensesFx,
});

deleteCategoryFx.use(async ({ id, token }) => {
  try {
    const response = await request({
      ...ENDPOINTS.deleteCategory,
      headers: getAuthHeader(token),
      body: {
        id,
      },
    });

    if (!response || !response.message) {
      triggerMessage('Произошла ошибка');
      return;
    }

    triggerMessage(response.message);
  } catch (e: any) {
    triggerMessage(e.message ?? 'Произошла ошибка');
  }
});

sample({
  clock: deleteCategory,
  source: $user,
  fn: (
    user,
    categoryToDeleteId
  ): CategoryDeletingPayloadType & Pick<UserType, 'token'> => ({
    id: categoryToDeleteId,
    token: user.token,
  }),
  target: deleteCategoryFx,
});

$categories.on(deleteCategoryFx.done, (prevCategories, { params: { id } }) =>
  prevCategories.filter((category) => category.id !== id)
);

// $expenses.on(deleteCategoryFx.done, (expenses, { params: { id } }) => {
//   if (expenses.some((expense) => expense.id === id)) {
//     return deleteCategoryApiResponse.categories;
//   }
// });

sample({
  clock: deleteCategoryFx.done,
  source: { user: $user, categoriesMap: $categoriesMap },
  fn: ({
    user,
    categoriesMap,
  }): ExpenseGettingPayload &
    Pick<UserType, 'token'> & {
      categoriesMap?: CategoriesMapType;
    } => ({
    categoriesMap,
    token: user.token,
  }),
  target: getExpensesFx,
});
