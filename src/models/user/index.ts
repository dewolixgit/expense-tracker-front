import { createEffect, createStore } from 'effector';

import { UserAuthPayloadType, UserAuthResponseType, UserType } from './types';

import { defaultUserData } from 'config/user';

const $user = createStore<UserType>(defaultUserData);

const userRegistrationFx = createEffect<
  UserAuthPayloadType,
  UserAuthResponseType
>();

const userLoginFx = createEffect<UserAuthPayloadType, UserAuthResponseType>();
