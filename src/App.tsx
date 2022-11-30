import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import * as React from 'react';

import { Router } from './pages';

import { RootContainer } from 'components/ui';

dayjs.locale('ru');

function App() {
  return (
    <RootContainer>
      <Router />
    </RootContainer>
  );
}

export default React.memo(App);
