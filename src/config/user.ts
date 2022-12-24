import { UserType } from 'models/user/types';

export const LOCALSTORAGE_USER_DATA_NAME = 'userData';

export const defaultUserData: UserType = {
  token: null,
  id: null,
};
