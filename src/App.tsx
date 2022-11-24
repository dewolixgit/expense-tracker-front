import * as React from 'react';

import { Router } from './pages';

import { RootContainer, RootLayout } from 'components/ui';

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <Router />
      </RootContainer>
    </RootLayout>
  );
}

export default App;
