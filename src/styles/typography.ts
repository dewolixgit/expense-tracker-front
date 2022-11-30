import { css } from 'styled-components';

export const textSizes = {
  s: {
    desktop: '16px',
  },
  xxl: {
    desktop: '28px',
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

export const textXXL = css`
  font-size: ${textSizes.xxl.desktop};
  // todo мобилки
`;

export const textXXLBold = css`
  ${textXXL};
  font-weight: 700;
`;
