import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Overall from './Components/Overall'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/' element={<Overall />} />
      </Routes>
    </>
  )
}

export default App
