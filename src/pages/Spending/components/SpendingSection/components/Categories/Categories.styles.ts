import styled, { css } from 'styled-components';

import { colors, shadows } from 'styles/colors';
import {
  commonBlocksBorderRadius,
  commonBlocksMargin,
  commonElementsBorderRadius,
} from 'styles/consts';
import { square } from 'styles/mixins';
import { textSBold } from 'styles/typography';

// Расстояние между слайдами
export const BETWEEN_SLIDES_PX = 20;

export const Container = styled.div`
  width: 100%;
  height: 300px;
  margin-top: ${commonBlocksMargin.desktop};

  .swiper {
    ${square('100%')};
    padding: 14px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      pointer-events: none;

      ${square('100%')};
      border-radius: ${commonBlocksBorderRadius.desktop};
      box-shadow: ${shadows.light} inset;
    }
  }

  .swiper-slide {
    height: calc((100% - ${BETWEEN_SLIDES_PX}px * 2) / 3);
    z-index: 1;
    overflow: hidden;

    background-color: ${colors.white};
    box-shadow: ${shadows.light};
    border-radius: ${commonElementsBorderRadius.desktop};
  }

  .swiper-button-prev,
  .swiper-button-next {
    text-rendering: auto;
  }
`;

export const InnerSlide = styled.div<{ color?: string }>`
  padding: 8px;

  ${square('100%')};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;

export const Text = styled.div`
  ${textSBold};

  background-color: white;
  border-radius: ${commonElementsBorderRadius.desktop};
  padding: 6px;

  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
