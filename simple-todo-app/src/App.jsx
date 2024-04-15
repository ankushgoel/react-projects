import { useState } from 'react'
import './App.css'
import ToDoMenu from './components/ToDoMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App h-screen bg-gradient-to-r from-purple-400 via-pink-200 to-pink-100'>
      <h1 className='text-violet-900 font-bold mb-8 text5xl pt-12'>ToDo App</h1>
      <ToDoMenu />
    </div>
  )
}

export default App
