import styled, { css } from 'styled-components';

import { square } from 'styles/mixins';

export const Color = styled.div<{ color?: string }>`
  ${square('10px')};
  border-radius: 50%;
  margin-right: 8px;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;
