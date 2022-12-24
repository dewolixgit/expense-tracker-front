import { createEffect, createEvent, restore } from 'effector';

import { UserType } from './types';

import { defaultUserData, LOCALSTORAGE_USER_DATA_NAME } from 'config/user';

export const userDataChanged = createEvent<UserType>();

const $user = restore<UserType>(userDataChanged, defaultUserData);

export const $isUserAuthenticated = $user.map((store) => !!store.token);

// const userRegistrationFx = createEffect<
//   UserAuthPayloadType,
//   UserAuthResponseType
// >();

/**
 * Эффект проверки пользователя на наличие данных
 * о логине при входе в приложение
 */
export const userLoginFx = createEffect<void, UserType | null>(() => {
  const localStorageUserData = localStorage.getItem(
    LOCALSTORAGE_USER_DATA_NAME
  );

  if (!localStorageUserData) {
    return null;
  }

  const userData = JSON.parse(localStorageUserData);

  if (userData && userData.token && userData.userId) {
    return {
      id: userData.userId,
      token: userData.userId,
    };
  }

  return null;
});

$user.on(userLoginFx.doneData, (_, loginData) => loginData ?? undefined);

/**
 * Эффект разлогина пользователя
 */
export const userLogoutFx = createEffect<void, UserType>(() => {
  localStorage.removeItem(LOCALSTORAGE_USER_DATA_NAME);

  return {
    id: null,
    token: null,
  };
});

$user.on(userLogoutFx.doneData, (_, logoutData) => logoutData);
