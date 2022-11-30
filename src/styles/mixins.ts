import { css } from 'styled-components';

import { commonContentPadding } from 'styles/consts';

export const square = (value: string) => css`
  width: ${value};
  height: ${value};
`;

export const sidePaddings = (value = commonContentPadding.desktop) => css`
  padding-left: ${value};
  padding-right: ${value};
`;
