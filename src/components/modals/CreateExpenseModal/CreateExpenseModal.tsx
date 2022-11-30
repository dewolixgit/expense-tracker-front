import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  ModalProps,
  Row,
  Select,
} from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs from 'dayjs';
import * as React from 'react';

import { Color } from './CreateExpenseModal.styles';

import { DATES_FORMAT_CAPITAL_L } from 'config/dates';
import {
  COMMON_REQUIRED_MESSAGE,
  getCreateExpenseInitialValues,
} from 'config/forms';
import { mockCategories } from 'config/mock';

type Props = Pick<ModalProps, 'open' | 'onCancel'>;

const CreateExpenseModal: React.FC<Props> = ({ onCancel, open = false }) => {
  const initialFormValues = React.useMemo(
    () => getCreateExpenseInitialValues(mockCategories[0].id),
    []
  );

  return (
    <Modal
      title="Добавление расходов"
      footer={<Button onClick={onCancel}>Отмена</Button>}
      onCancel={onCancel}
      open={open}
    >
      <Form
        layout="vertical"
        onFinish={console.log}
        initialValues={initialFormValues}
      >
        <Form.Item
          label="Категория"
          name="category"
          rules={[{ required: true, message: COMMON_REQUIRED_MESSAGE }]}
        >
          <Select>
            {mockCategories.map(({ name, color, id }) => (
              <Select.Option key={id}>
                <Row align="middle">
                  <Color color={color} />
                  {name}
                </Row>
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Дата"
          name="date"
          rules={[{ required: true, message: COMMON_REQUIRED_MESSAGE }]}
        >
          <DatePicker locale={locale} format={DATES_FORMAT_CAPITAL_L} />
        </Form.Item>

        <Form.Item label="Описание" name="description">
          <Input.TextArea
            showCount
            maxLength={64}
            autoSize={{
              minRows: 2,
              maxRows: 2,
            }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default React.memo(CreateExpenseModal);
