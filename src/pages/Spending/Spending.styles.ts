import styled from 'styled-components';

import { Logo } from 'components/Logo';
import { commonBlocksMargin, commonSectionMargin } from 'styles/consts';
import { square } from 'styles/mixins';

export const FlexContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${square('100%')};
`;

export const StyledLogo = styled(Logo)`
  margin: ${commonBlocksMargin.desktop} 0 ${commonSectionMargin.desktop};
`;
