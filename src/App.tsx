import { message } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { useStore } from 'effector-react';
import * as React from 'react';

import { Router } from './pages';

import { RootContainer } from 'components/ui';
import { MessageApiGate } from 'models/messages';
import { $isUserAuthenticated, userLoginFx } from 'models/user';

dayjs.locale('ru');

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const isAuthenticated = useStore($isUserAuthenticated);
  const isAuthenticating = useStore(userLoginFx.pending);

  React.useEffect(() => {
    userLoginFx();
  });

  if (isAuthenticating) {
    return null;
  }

  return (
    <RootContainer>
      <Router isAuthenticated={isAuthenticated} />
      <MessageApiGate api={messageApi} />
      {/* Todo: loader на всю страницу, во время userLoginFx.pending */}
      {contextHolder}
    </RootContainer>
  );
}

export default React.memo(App);
