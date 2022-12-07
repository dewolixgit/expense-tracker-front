import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Space } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import * as React from 'react';

import {
  Container,
  SidePaddingContainer,
  StyledButton,
  StyledDivider,
  Title,
} from './SpendingListBlock.styles';
import { SpendingList } from './components';

import { CreateExpenseModal } from 'components/modals';
import { DATES_FORMAT_CAPITAL_L } from 'config/dates';

const SpendingListBlock: React.FC = () => {
  const [createExpenseVisible, setCreateExpenseVisible] = React.useState(false);

  return (
    <>
      <Container>
        <Title>
          Расходы
          <StyledButton
            icon={<PlusOutlined />}
            onClick={() => setCreateExpenseVisible(true)}
          />
        </Title>
        <StyledDivider />
        <SidePaddingContainer>
          <Space direction="vertical">
            <Space>
              <DatePicker
                showToday={false}
                locale={locale}
                format={DATES_FORMAT_CAPITAL_L}
              />
              <Button type="primary">Сегодня</Button>
            </Space>
            <DatePicker.RangePicker
              locale={locale}
              format={DATES_FORMAT_CAPITAL_L}
            />
          </Space>
        </SidePaddingContainer>
        <StyledDivider />
        <SpendingList />
      </Container>
      <CreateExpenseModal
        open={createExpenseVisible}
        onCancel={() => setCreateExpenseVisible(false)}
      />
    </>
  );
};

export default SpendingListBlock;
