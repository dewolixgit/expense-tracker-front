import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img<{ isReact?: boolean }>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  ${({ isReact = false }) =>
    isReact &&
    css`
      animation: ${spin} infinite 20s linear;
    `}

  &:hover {
    filter: ${({ isReact = false }) =>
      isReact
        ? `
            drop-shadow(0 0 2em #646cffaa)
          `
        : `
            drop-shadow(0 0 2em #61dafbaa)
          `};
  }
`;
