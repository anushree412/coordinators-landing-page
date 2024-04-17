import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Header from './Components/Header'
import Hero from './Components/Hero'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Login />
      <Hero/>
    </div>
  )
}

export default App
