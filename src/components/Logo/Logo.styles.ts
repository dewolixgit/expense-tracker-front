import styled from 'styled-components';

import { colors } from 'styles/colors';
import { commonBorderRadius } from 'styles/consts';

export const Container = styled.div`
  padding: 20px 50px;
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: ${commonBorderRadius.desktop};
`;
