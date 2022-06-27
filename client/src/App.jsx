import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  const [count, setCount] = useState(0)
  const urlWithProxy = '/'

  return (
    <div className='App'>
      <p>Hello Vite + React! Learn React</p>
    </div>
  )
}

export default App
