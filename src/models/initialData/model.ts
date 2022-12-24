import { createEffect } from 'effector';

import { UserType } from 'models/user';

export const getInitialDataFx = createEffect<Pick<UserType, 'token'>, void>();
