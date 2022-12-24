import { Button, Form, Input, Modal, ModalProps } from 'antd';
import { useForm } from 'antd/es/form/Form';
import * as React from 'react';
import { HexColorPicker } from 'react-colorful';

import { finishCreatingForm, finishEditingForm, FormApiGate } from './model';

import { ChangeCategoryFieldsType } from 'components/modals/CreateCategoryModal/types';
import { ADD_CATEGORY_INITIAL_VALUES } from 'config/forms';
import { CategoryType } from 'models/categories/types';

type Props = Pick<ModalProps, 'open'> & { onCancel: VoidFunction } & (
    | {
        editing: true;
        category: CategoryType | null;
      }
    | { editing: false }
  );

const CreateCategoryModal: React.FC<Props> = (props) => {
  const { open = false, onCancel, editing } = props;

  const [formApi] = useForm();

  React.useEffect(() => {
    if (!open) {
      formApi.resetFields();
    }
  }, [open]);

  const onFinishForm = React.useCallback(
    (formFields: ChangeCategoryFieldsType) => {
      if (editing && props.category) {
        finishEditingForm({
          id: props.category.id,
          name: formFields.name,
          color: formFields.color,
          onSuccess: onCancel,
        });
        return;
      }

      if (!editing) {
        finishCreatingForm({
          name: formFields.name,
          color: formFields.color,
          onSuccess: onCancel,
        });
      }
    },
    // Не могу следить за props.category, поэтому слежу на open, потому что,
    // скорее всего, редактируемая категория будет меняться во время открытия
    // модалки
    [editing, open, onCancel]
  );

  return (
    <Modal
      visible={open}
      title="Создание категории расходов"
      onCancel={onCancel}
      footer={<Button onClick={onCancel}>Отмена</Button>}
    >
      <FormApiGate formApi={formApi} />
      <Form
        onFinish={onFinishForm}
        initialValues={
          editing && props.category
            ? { name: props.category.name, color: props.category.color }
            : ADD_CATEGORY_INITIAL_VALUES
        }
        layout="vertical"
        form={formApi}
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
