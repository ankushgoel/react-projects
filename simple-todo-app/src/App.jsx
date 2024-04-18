import './App.css'
import ToDoMenu from './components/ToDoMenu'

function App() {

  return (
    <div className='App h-screen bg-gradient-to-r from-purple-500 via-pink-300 to-pink-200'>
      <h1 className='text-violet-900 font-bold mb-8 text5xl pt-12'>ToDo App</h1>
      <ToDoMenu />
    </div>
  )
}

export default App
