import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  
  
  return (
    <div>
      <Navbar/>
      <div className='container-1' >
        <Routes>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='products' element={<Products/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </div>
       <Footer/>
     
    </div>
  )
}

export default App
