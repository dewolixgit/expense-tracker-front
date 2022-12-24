import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

import { Relative } from 'components/ui';
import { commonBlocksMargin, commonSectionMargin } from 'styles/consts';
import { square } from 'styles/mixins';

export const FlexContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${square('100%')};
`;

export const Header = styled(Relative)`
  margin: ${commonBlocksMargin.desktop} 0 ${commonSectionMargin.desktop};
`;

export const StyledLogout = styled(Button).attrs({
  icon: <LogoutOutlined />,
})`
  position: absolute;
  top: 50%;
  right: -${commonBlocksMargin.desktop};
  transform: translate(100%, -50%);
` as typeof Button;
