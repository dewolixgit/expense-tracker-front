import { DeleteOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { useStore } from 'effector-react';
import * as React from 'react';

import { Color, ScrollContainer } from './SpendingList.styles';

import { ApproveModal } from 'components/modals';
import { DATES_FORMAT_CAPITAL_L } from 'config/dates';
import { $expenses, deleteExpense, ExpenseType } from 'models/expenses';

dayjs.extend(localizedFormat);

const SpendingList: React.FC = () => {
  const [expenseToDeleteId, setExpenseToDeleteId] = React.useState<
    ExpenseType['id'] | null
  >(null);

  const expenses = useStore($expenses);

  return (
    <>
      <ScrollContainer>
        <List
          dataSource={expenses}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                item.value,
                dayjs(item.date).format(DATES_FORMAT_CAPITAL_L),
                <Button
                  key="0"
                  icon={<DeleteOutlined />}
                  onClick={() => setExpenseToDeleteId(item.id)}
                />,
              ]}
            >
              <List.Item.Meta
                avatar={<Color color={item.category.color} />}
                title={item.category.name}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </ScrollContainer>
      <ApproveModal
        open={expenseToDeleteId !== null}
        onCancel={() => setExpenseToDeleteId(null)}
        onOk={() => {
          if (expenseToDeleteId) {
            deleteExpense({
              id: expenseToDeleteId,
              onSuccess: () => setExpenseToDeleteId(null),
            });
          }
        }}
      />
    </>
  );
};

export default SpendingList;
