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
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useStore } from 'effector-react';
import * as React from 'react';

import { Color } from './CreateExpenseModal.styles';

import { finishSubmit } from 'components/modals/CreateExpenseModal/model';
import { CreateExpenseFormFieldsType } from 'components/modals/CreateExpenseModal/types';
import { DATES_FORMAT_CAPITAL_L } from 'config/dates';
import {
  COMMON_REQUIRED_MESSAGE,
  getCreateExpenseInitialValues,
} from 'config/forms';
import { $categories } from 'models/categories';
import { triggerMessage } from 'models/messages';
import getZeroLocalString from 'utils/getZeroLocalString';

type Props = Pick<ModalProps, 'open'> & { onCancel?: VoidFunction };

const CreateExpenseModal: React.FC<Props> = ({ onCancel, open = false }) => {
  const categories = useStore($categories);
  const [form] = useForm();

  React.useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  const onFinish = React.useCallback((fields: CreateExpenseFormFieldsType) => {
    const now = dayjs(getZeroLocalString(dayjs()));
    const selectedDate = dayjs(getZeroLocalString(fields.date));

    if (now < selectedDate) {
      triggerMessage('Выбранная дата позже сегодняшней');
      return;
    }

    finishSubmit({
      date: fields.date,
      categoryId: fields.categoryId,
      description: fields.description,
      value: fields.value,
      onSuccess: () => onCancel?.(),
    });
  }, []);

  return (
    <Modal
      title="Добавление расходов"
      footer={<Button onClick={onCancel}>Отмена</Button>}
      onCancel={onCancel}
      open={open}
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={getCreateExpenseInitialValues()}
        form={form}
      >
        <Form.Item
          label="Категория"
          name="categoryId"
          rules={[{ required: true, message: COMMON_REQUIRED_MESSAGE }]}
        >
          <Select>
            {categories.map(({ name, color, id }) => (
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
          label="Сколько потрачено"
          name="value"
          rules={[{ required: true, message: COMMON_REQUIRED_MESSAGE }]}
        >
          <Input type="number" />
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
