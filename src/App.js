import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={ <Home/>} / >
        <Route path='/login' element={ <Login/>} / >
        <Route path='/register' element={ <Register/>} / >
      </Routes>
      
       </Router>
  )
}

export default App