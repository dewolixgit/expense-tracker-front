import * as React from 'react';

import { FlexContainer, StyledLogo } from './Spending.styles';
import { SpendingSection } from './components';

const Spending: React.FC = () => {
  return (
    <FlexContainer>
      <StyledLogo />
      <SpendingSection />
    </FlexContainer>
  );
};

export default Spending;
