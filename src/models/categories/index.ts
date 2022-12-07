import { createStore } from 'effector';
import { createEffect } from 'effector/compat';

import {
  CategoryCreatingPayloadType,
  CategoryDeletingApiResponseType,
  CategoryDeletingPayloadType,
  CategoryEditingPayLoadType,
  CategoryType,
} from './types';

import { defaultCategories } from 'config/categories';

export const $categories = createStore<CategoryType[]>(defaultCategories);

export const getCategoriesFx = createEffect<void, CategoryType[]>();

export const createCategoryFx = createEffect<
  CategoryCreatingPayloadType,
  CategoryType
>();

export const editCategoryFx = createEffect<
  CategoryEditingPayLoadType,
  CategoryType
>();

export const deleteCategoryFx = createEffect<
  CategoryDeletingPayloadType,
  CategoryDeletingApiResponseType
>();
