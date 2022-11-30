import { Button, Divider } from 'antd';
import styled from 'styled-components';

import { colors, shadows } from 'styles/colors';
import { commonBlocksBorderRadius, commonContentPadding } from 'styles/consts';
import { sidePaddings, square } from 'styles/mixins';

export const Container = styled.div`
  border-radius: ${commonBlocksBorderRadius.desktop};
  box-shadow: ${shadows.light};
  overflow: hidden;

  display: flex;
  flex-direction: column;

  ${square('100%')};
`;

export const Title = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  background-color: ${colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  left: ${commonContentPadding.desktop};
  top: 50%;
  transform: translate(0, calc(-50% + 4px));
` as typeof Button;

export const StyledDivider = styled(Divider)`
  margin: 10px 0;
  flex-shrink: 0;
`;

export const SidePaddingContainer = styled.div`
  ${sidePaddings()};
`;
