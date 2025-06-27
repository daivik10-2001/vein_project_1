import React, { useEffect, useState } from 'react'
import logo from '../assets/vlogo.png';
import'../components/Navbar.css'
import {  NavLink  } from 'react-router-dom';
const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', () => {
        window.scrollY > 10 ? setSticky(true) : setSticky(false);
      })
    },[]);

  return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
    
      <img src={logo} alt="" className='logo'  />
      <ul>
     <NavLink to='/'><li>Home</li></NavLink>   
        <NavLink to='/about'><li>About</li></NavLink> 
        <NavLink to='/products'><li>Products</li></NavLink> 
        <NavLink to='/contact'><li><button className='btn'>Contact</button></li></NavLink> 
        
      </ul>
      
    </nav>
  )
}

export default Navbar
