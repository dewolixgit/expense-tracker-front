import { MessageInstance } from 'antd/es/message/interface';
import { createEffect, createEvent, sample } from 'effector';
import { createGate } from 'effector-react';

import { TriggerMessageEffectPayload } from 'models/messages/types';

/**
 * Здесь логика навернояка довольно раздута
 * и могла бы быть легче, но мне захотелось попробовать Gate.
 * Гейт вставляется в App, где создаётся экземпляр апи сообщений
 */

/**
 * Гейт для получения апи сообщений
 */
export const MessageApiGate = createGate<{ api: MessageInstance }>();

/**
 * Событие триггера сообщения
 */
export const triggerMessage = createEvent<string>();

/**
 * Эффект триггера сообщения, непосредственно использует апи и вызывает сообщение
 */
export const triggerMessageFx = createEffect<TriggerMessageEffectPayload, void>(
  async ({ api, message }: TriggerMessageEffectPayload) => {
    await api.info(message);
  }
);

/**
 * Происходит событие триггера - вызываем сообщение
 */
sample({
  clock: triggerMessage,
  source: MessageApiGate.state,
  fn: ({ api }, message): TriggerMessageEffectPayload => ({
    api,
    message,
  }),
  target: triggerMessageFx,
});
