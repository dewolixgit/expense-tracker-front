import { Col } from 'antd';
import { useEvent, useStore } from 'effector-react';
import * as React from 'react';

import { StyledRow } from './SpendingSection.styles';
import { Categories, Chart, SpendingListBlock } from './components';

import { getInitialData } from 'models/initialData/init';
import { $user } from 'models/user';
import { commonBlocksMargin } from 'styles/consts';
import parseNumber from 'utils/parseNumber';

const SpendingSection: React.FC = () => {
  const init = useEvent(getInitialData);
  const { token } = useStore($user);

  React.useEffect(() => {
    if (token) {
      init({
        token,
      });
    }
  }, []);

  return (
    <StyledRow gutter={parseNumber(commonBlocksMargin.desktop)}>
      <Col span={12}>
        <Chart />
        <Categories />
      </Col>
      <Col span={12}>
        <SpendingListBlock />
      </Col>
    </StyledRow>
  );
};

export default SpendingSection;
