import { createEvent, createStore } from 'effector';
import { createEffect } from 'effector/compat';

import {
  CategoryCreatingPayloadType,
  CategoryDeletingPayloadType,
  CategoryEditingPayLoadType,
  CategoryType,
} from './types';

import { defaultCategories } from 'config/categories';
import { UserType } from 'models/user';

export const $categories = createStore<CategoryType[]>(defaultCategories);

export const getCategories = createEvent();

export const deleteCategory = createEvent<CategoryType['id']>();

export const getCategoriesFx = createEffect<
  UserType['token'],
  CategoryType[]
>();

export const createCategoryFx = createEffect<
  CategoryCreatingPayloadType &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction },
  CategoryType | null
>();

export const editCategoryFx = createEffect<
  CategoryEditingPayLoadType &
    Pick<UserType, 'token'> & { onSuccess: VoidFunction },
  CategoryType | null
>();

export const deleteCategoryFx = createEffect<
  CategoryDeletingPayloadType & Pick<UserType, 'token'>,
  void
>();
