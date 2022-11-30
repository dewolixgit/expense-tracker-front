import { Button, Form, Input } from 'antd';
import * as React from 'react';

import { Centered, Title } from './Auth.styles';

const Auth: React.FC = () => {
  const toRegister = true;

  return (
    <Centered>
      <Title>{toRegister ? 'Регистрация' : 'Авторизация'}</Title>
      <Form layout="vertical" size="large">
        <Form.Item
          label="Логин"
          name="login"
          rules={[
            { required: true, message: 'Это поле нужно заполнить' },
            { min: 3, message: 'Нужно ввести хотя бы 3 символа' },
            { max: 32, message: 'Как-то слишком много символов' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            { required: true, message: 'Это поле нужно заполнить' },
            { min: 8, message: 'Нужно ввести хотя бы 8 символов' },
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
      </Form>
    </Centered>
  );
};

export default React.memo(Auth);
