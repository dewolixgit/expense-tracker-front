import { Button, DatePicker, Space } from 'antd';
import * as React from 'react';

import {
  Container,
  SidePaddingContainer,
  StyledDivider,
  Title,
} from 'pages/Spending/components/SpendingSection/components/SpendingListBlock/SpendingListBlock.styles';
import { SpendingList } from 'pages/Spending/components/SpendingSection/components/SpendingListBlock/components/SpendingList';

const SpendingListBlock: React.FC = () => {
  return (
    <Container>
      <Title>Расходы</Title>
      <StyledDivider />
      <SidePaddingContainer>
        <Space direction="vertical">
          <Space>
            <DatePicker showToday={false} />
            <Button type="primary">Сегодня</Button>
          </Space>
          <DatePicker.RangePicker />
        </Space>
      </SidePaddingContainer>
      <StyledDivider />
      <SpendingList />
    </Container>
  );
};

export default SpendingListBlock;
