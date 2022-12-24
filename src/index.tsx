import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// Мб костыль, но помогает в правильном порядке определить обработчики
import './models/expenses/init';

import 'styles/index.scss';
import 'swiper/css/bundle';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
