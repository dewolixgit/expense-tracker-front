import { List } from 'antd';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import * as React from 'react';

import { Color, ScrollContainer } from './SpendingList.styles';

import { DATES_FORMAT_CAPITAL_L } from 'config/dates';
import { mockList } from 'config/mock';

dayjs.extend(localizedFormat);

const SpendingList: React.FC = () => {
  return (
    <ScrollContainer>
      <List
        dataSource={mockList}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[dayjs(item.date).format(DATES_FORMAT_CAPITAL_L)]}
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
  );
};

export default SpendingList;
