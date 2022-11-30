import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import * as React from 'react';

import { Router } from './pages';

import { RootContainer, RootLayout } from 'components/ui';

dayjs.locale('ru');

function App() {
  return (
    <RootLayout>
      <RootContainer>
        <Router />
      </RootContainer>
    </RootLayout>
  );
}

export default React.memo(App);
