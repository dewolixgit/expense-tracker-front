import { RequestMethodsEnum } from 'utils/request';

export const ENDPOINTS = {
  register: {
    url: '/api/auth/register',
    method: RequestMethodsEnum.POST,
  },
  login: {
    url: '/api/auth/authenticate',
    method: RequestMethodsEnum.POST,
  },

  categories: {
    url: '/api/categories/get',
    method: RequestMethodsEnum.GET,
  },
  createCategory: {
    url: '/api/categories/create',
    method: RequestMethodsEnum.POST,
  },
  editCategory: {
    url: '/api/categories/edit',
    method: RequestMethodsEnum.POST,
  },
  deleteCategory: {
    url: '/api/categories/delete',
    method: RequestMethodsEnum.POST,
  },

  expenses: {
    url: '/api/expenses/get',
    method: RequestMethodsEnum.GET,
  },
  createExpense: {
    url: '/api/expenses/create',
    method: RequestMethodsEnum.POST,
  },
  deleteExpense: {
    url: '/api/expenses/delete',
    method: RequestMethodsEnum.POST,
  },
};
