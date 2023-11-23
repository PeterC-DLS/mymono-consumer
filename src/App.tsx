import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PComponent, PComponentProps } from '@peter/components';
import { QComponent, QComponentProps } from '@peter/components';

function App() {
  const [count, setCount] = useState(0)

  const pProps: PComponentProps = {
    text: `Clicked ${count} times`,
    handleClick: () => setCount((c) => c + 1),
  };

  const qProps: QComponentProps = {
    qText: `Clicked ${count} times`,
    qHandleClick: () => setCount((c) => c - 1),
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <PComponent {...pProps} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <QComponent {...qProps} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
