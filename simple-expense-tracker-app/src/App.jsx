// import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'

function App() {

  return (
    <div className='App h-screen bg-slate-600'>
      <h1 className='pt-16'>Expense Tracker App</h1>
      <Balance />
    </div>
  )
}

export default App
