import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './product.jsx'
import Title from './title.jsx'
import Producttab from './productTab.jsx'
import MsgBox from './msgbox.jsx'

function App() {
  const [count, setCount] = useState(0)
  let options = ["option 1", "option 2"];
  return (
    <>
      <div>
        <MsgBox sender ="abc" receiver ="xyz" text ="hi there it is your msg.." />
        <Producttab title="phone" price="20000" features={options}/>
        <Producttab title="Laptop" price="50000" features={options}/>
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
