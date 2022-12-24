import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Space } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import dayjs, { Dayjs } from 'dayjs';
import { useEvent } from 'effector-react';
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
import {
  pickDate,
  pickRange,
} from 'pages/Spending/components/SpendingSection/components/SpendingListBlock/model';

const SpendingListBlock: React.FC = () => {
  const [createExpenseVisible, setCreateExpenseVisible] = React.useState(false);
  const pickDateEvent = useEvent(pickDate);
  const pickRangeEvent = useEvent(pickRange);

  const onClickToday = React.useCallback(() => {
    pickDateEvent(dayjs());
  }, [pickDateEvent]);

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
                onChange={(date) => {
                  if (date) {
                    pickDateEvent(date);
                  }
                }}
              />
              <Button type="primary" onClick={onClickToday}>
                Сегодня
              </Button>
            </Space>
            <DatePicker.RangePicker
              locale={locale}
              format={DATES_FORMAT_CAPITAL_L}
              onChange={(dates) => {
                if (dates && dates[0] && dates[1]) {
                  pickRangeEvent(dates as [Dayjs, Dayjs]);
                }
              }}
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
