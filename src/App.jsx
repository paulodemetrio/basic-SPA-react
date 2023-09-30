import './App.css'

// Reaproveitando a estrutura
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar'

function App() {

  return (
    <div className="app">
      <Navbar />
      <h1>React Router</h1>
      <Outlet />
      <p>footer</p>
    </div>
  )
}

export default App
