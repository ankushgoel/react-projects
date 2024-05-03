import { useState } from 'react'
import './App.css'
import Currency from './Currency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div>
        <h1>Currency Converter</h1>
      </div>
      <Currency />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App