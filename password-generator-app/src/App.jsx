// import { useState } from 'react'
import './App.css'
import PG from './PG'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='App h-screen flex flex-col justify-center bg-gradient-to-r from-green-400 to-blue-500'>

        <h1 className="text-3xl font-bold gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
          Password Generator</h1>
        <PG />
      </div>
    </>
  )
}

export default App
