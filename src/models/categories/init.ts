import { normalizeCategory } from './normalizers';
import { CategoriesMapType, CategoryType } from './types';

import {
  $categories,
  createCategoryFx,
  deleteCategoryFx,
  editCategoryFx,
  getCategoriesFx,
} from './';

import { $expenses } from 'models/expenses';
import sleep from 'utils/sleep';

// todo
// todo normalize
getCategoriesFx.use(() => []);

$categories.on(getCategoriesFx.doneData, (categories) => categories);

const $categoriesMap = $categories.map<CategoriesMapType>((categories) =>
  categories.reduce(
    (acc, category) => ({
      ...acc,
      [category.id]: category,
    }),
    {} as CategoriesMapType
  )
);

// todo
// todo normalize
createCategoryFx.use(async (creatingPayload) => {
  await sleep();

  return {
    id: 'dsfds',
    name: creatingPayload.name,
    color: creatingPayload.color,
  };
});

$categories.on(
  createCategoryFx.doneData,
  (prevCategories, apiCreatedCategory) => [
    ...prevCategories,
    normalizeCategory(apiCreatedCategory),
  ]
);

// todo
// todo normalize
editCategoryFx.use(async ({ id, name, color }) => {
  await sleep();

  const toReturn: CategoryType = {
    id,
    name: name ?? 'abc',
    color: color ?? 'colorAbc',
  };

  return toReturn;
});

$categories.on(
  editCategoryFx.done,
  (prevCategories, { params: { index }, result: apiEditedCategory }) => {
    prevCategories[index] = normalizeCategory(apiEditedCategory);
    return prevCategories;
  }
);

// todo реакция expenses не удаление категории
// todo normalize
// todo
deleteCategoryFx.use(async (deletingPayload) => ({
  expenseDeletingTriggered: false,
}));

$categories.on(
  deleteCategoryFx.done,
  (prevCategories, { params: deletedCategoryId }) =>
    prevCategories.filter((category) => category.id !== deletedCategoryId)
);

$expenses.on(deleteCategoryFx.doneData, (_, deleteCategoryApiResponse) => {
  if (deleteCategoryApiResponse.expenseDeletingTriggered) {
    return deleteCategoryApiResponse.categories;
  }
});
