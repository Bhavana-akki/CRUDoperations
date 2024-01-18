import React from 'react'
import Cart from './Components/Cart'
import Product from './Components/Product'
import Nav from './Components/Nav'
import './global.css'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Update from './Components/Update'
const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Nav/>
        <Routes>
            <Route path='/' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/update/id' element={<Update/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
