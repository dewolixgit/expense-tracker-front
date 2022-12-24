import { FormInstance } from 'antd';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';

import { AuthFormFieldsType, AuthFormType } from './types';

import { ENDPOINTS } from 'config/endpoints';
import { LOCALSTORAGE_USER_DATA_NAME } from 'config/user';
import { triggerMessage } from 'models/messages';
import { userDataChanged } from 'models/user';
import { request } from 'utils/request';

export const $isRegistering = createStore(false);

/**
 * Гейт для получения апи antd-формы
 */
export const FormApiGate = createGate<{ api: FormInstance }>();

/**
 * Событие смены типа входа в систему
 */
export const authTypeChanged = createEvent();

FormApiGate.state.on(authTypeChanged, (state) => state.api.resetFields());

/**
 * Реакция на смену типа входа в систему
 */
$isRegistering.on(authTypeChanged, (prevState) => !prevState);

// Todo: возможно, лучше поделить ситуации "регистрируемся/авторизируемся"
//  на два разных эффекта, на которые будет, если нужно, подписан стор юзера
export const formSubmitFx = createEffect(
  async ({ isRegistering, fields }: AuthFormType) => {
    try {
      if (isRegistering) {
        const response = await request({
          ...ENDPOINTS.register,
          body: {
            email: fields.email,
            password: fields.password,
          },
        });

        if (response.message) {
          triggerMessage(response.message);
        } else {
          triggerMessage('Регистрация прошла успешно');
        }

        authTypeChanged();

        return;
      }

      const response = await request({
        ...ENDPOINTS.login,
        body: {
          email: fields.email,
          password: fields.password,
        },
      });

      if (!response.userId || !response.token) {
        triggerMessage('Что-то пошло не так');
        return;
      }

      localStorage.setItem(
        LOCALSTORAGE_USER_DATA_NAME,
        JSON.stringify({ userId: response.userId, token: response.token })
      );

      // Todo: вероятно, лучше унести это
      //  в реакцию стора юзера на завершение эффекта
      userDataChanged({
        id: response.userId,
        token: response.token,
      });
    } catch (e: any) {
      console.log('formSubmitFx error', e);
      if (e.message) {
        triggerMessage(e.message);
      }
    }
  }
);

/**
 * Событие успешного заполнения формы. В качестве payload'а - поля формы
 */
export const finishForm = createEvent<AuthFormFieldsType>();

/**
 * При событии заполнения формы, достать значение типа входа
 * и поля формы и отправить их в еффект отправки формы
 */
sample({
  clock: finishForm,
  source: $isRegistering,
  fn: (isRegistering, fields): AuthFormType => ({
    isRegistering,
    fields,
  }),
  target: formSubmitFx,
});
