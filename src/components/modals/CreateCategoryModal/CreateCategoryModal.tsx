import { Button, Form, Input, Modal, ModalProps } from 'antd';
import * as React from 'react';
import { HexColorPicker } from 'react-colorful';

import { ADD_CATEGORY_INITIAL_VALUES } from 'config/forms';

type Props = Pick<ModalProps, 'open' | 'onCancel'>;

const CreateCategoryModal: React.FC<Props> = ({ open = false, onCancel }) => {
  return (
    <Modal
      visible={open}
      title="Создание категории расходов"
      onCancel={onCancel}
      footer={<Button onClick={onCancel}>Отмена</Button>}
    >
      <Form
        onFinish={console.log}
        initialValues={ADD_CATEGORY_INITIAL_VALUES}
        layout="vertical"
      >
        <Form.Item
          label="Название"
          name="name"
          rules={[{ required: true, message: 'Нужно ввести название' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Цвет" name="color">
          <HexColorPicker />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default React.memo(CreateCategoryModal);
