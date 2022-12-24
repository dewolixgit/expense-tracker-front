import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Auth } from './Auth';
import { Spending } from './Spending';

type Props = {
  isAuthenticated?: boolean;
};

const Router: React.FC<Props> = ({ isAuthenticated = false }) => (
  <BrowserRouter>
    {isAuthenticated ? (
      <>
        <Routes>
          <Route path="/" element={<Spending />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    ) : (
      <>
        <Routes>
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="auth" />} />
        </Routes>
      </>
    )}
  </BrowserRouter>
);

export default React.memo(Router);
