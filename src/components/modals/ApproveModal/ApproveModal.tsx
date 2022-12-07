import { Modal, ModalProps } from 'antd';
import * as React from 'react';

type Props = Pick<
  ModalProps,
  'open' | 'title' | 'children' | 'onOk' | 'onCancel'
>;

const ApproveModal: React.FC<Props> = ({
  open = false,
  title = '',
  children = 'Действительно ли вы хотите это сделать?',
  onCancel,
  onOk,
}) => {
  return (
    <Modal
      visible={open}
      title={title}
      okText="Да"
      cancelText="Нет"
      onCancel={onCancel}
      onOk={onOk}
    >
      {children}
    </Modal>
  );
};

export default React.memo(ApproveModal);
