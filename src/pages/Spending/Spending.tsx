import { useEvent } from 'effector-react';
import * as React from 'react';

import { FlexContainer, Header, StyledLogout } from './Spending.styles';
import { SpendingSection } from './components';

import { Logo } from 'components/Logo';
import { userLogoutFx } from 'models/user';

const Spending: React.FC = () => {
  const logout = useEvent(userLogoutFx);

  return (
    <FlexContainer>
      <Header>
        <StyledLogout onClick={logout} />
        <Logo />
      </Header>
      <SpendingSection />
    </FlexContainer>
  );
};

export default Spending;
