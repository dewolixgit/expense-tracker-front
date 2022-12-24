import { MessageInstance } from 'antd/es/message/interface';

export type TriggerMessageEffectPayload = {
  api: MessageInstance;
  message: string;
};
