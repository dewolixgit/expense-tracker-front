import { Button, DatePicker, Space } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import * as React from 'react';

import {
  Container,
  SidePaddingContainer,
  StyledDivider,
  Title,
} from './SpendingListBlock.styles';
import { SpendingList } from './components';

import { DATES_FORMAT_CAPITAL_L } from 'config/dates';

const SpendingListBlock: React.FC = () => {
  return (
    <Container>
      <Title>Расходы</Title>
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
  );
};

export default SpendingListBlock;
