import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Form from './components/Form'
function App() {
  const backendurl="http://127.0.0.1:8000";
  return (
    <div>
    <Navbar url={backendurl}/>
    <Herosection url={backendurl}/>
    <Form url={backendurl}/>
    </div>
  )
  
}

export default App
