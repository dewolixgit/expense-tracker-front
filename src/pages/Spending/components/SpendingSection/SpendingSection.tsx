import { Col } from 'antd';
import * as React from 'react';

import { StyledRow } from './SpendingSection.styles';
import { Categories, Chart, SpendingListBlock } from './components';

import { commonBlocksMargin } from 'styles/consts';
import parseNumber from 'utils/parseNumber';

const SpendingSection: React.FC = () => {
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
