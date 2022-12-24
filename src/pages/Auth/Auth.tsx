import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useStore } from 'effector-react';
import { useEvent } from 'effector-react/compat';
import * as React from 'react';

import { Centered, Title } from './Auth.styles';
import {
  $isRegistering,
  authTypeChanged,
  finishForm,
  FormApiGate,
} from './model';

const Auth: React.FC = () => {
  const toRegister = useStore($isRegistering);
  const onChangeAuthType = useEvent(authTypeChanged);

  const [form] = useForm();

  return (
    <Centered>
      <Title>{toRegister ? 'Регистрация' : 'Авторизация'}</Title>
      <FormApiGate api={form} />
      <Form layout="vertical" size="large" onFinish={finishForm} form={form}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: 'email' },
            { required: true, message: 'Это поле нужно заполнить' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: 'Это поле нужно заполнить' },
            { min: 6, message: 'Нужно ввести хотя бы 6 символов' },
            { max: 32, message: 'Как-то слишком много символов' },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {toRegister ? 'Зарегистрироваться' : 'Войти'}
          </Button>
        </Form.Item>
        <Button type="link" onClick={onChangeAuthType} block>
          {toRegister ? 'Хочу войти' : 'Хочу зарегистрироваться'}
        </Button>
      </Form>
    </Centered>
  );
};

export default React.memo(Auth);
