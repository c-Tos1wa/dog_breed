import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/List'
import { SignUp } from './pages/Register'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/lista-cachorros" element={<Home />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App
