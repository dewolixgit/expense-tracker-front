import { css } from 'styled-components';

export const textSizes = {
  s: {
    desktop: '16px',
  },
};

export const textS = css`
  font-size: ${textSizes.s.desktop};
  // todo мобилки
`;

export const textSBold = css`
  ${textS};
  font-weight: 700;
`;
