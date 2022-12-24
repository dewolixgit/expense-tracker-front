import styled from 'styled-components';

import { rootContainerWidth } from 'styles/consts';
import { square } from 'styles/mixins';

export const RootContainer = styled.div`
  position: relative;
  ${square('100%')};
  max-width: ${rootContainerWidth.desktop};
  margin: 0 auto;
`;

export const Relative = styled.div`
  position: relative;
`;
