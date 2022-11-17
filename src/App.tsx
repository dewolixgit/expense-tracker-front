import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';
import { useState } from 'react';
import * as React from 'react';

import s from './App.module.scss';
import { Logo } from './App.styles';

import foo from 'assets/hi/foo';
import reactLogo from 'assets/react.svg';
import { Bar } from 'components/assets/Bar';

const $count = createStore(0);
const clicked = createEvent();
$count.on(clicked, (prev) => prev + 1);

function App() {
  const count = useStore($count);

  foo(5);

  return (
    <div>
      <Bar />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Logo src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Logo src={reactLogo} alt="React logo" isReact />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={s.card}>
        <button onClick={() => clicked()}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={s.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
