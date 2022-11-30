import styled, { css } from 'styled-components';

import { square } from 'styles/mixins';

export const ScrollContainer = styled.div`
  flex: 1 0 0;

  overflow: auto;
`;

export const Color = styled.div<{ color?: string }>`
  ${square('20px')};

  border-radius: 50%;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;
