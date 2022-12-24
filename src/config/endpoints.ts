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
};
