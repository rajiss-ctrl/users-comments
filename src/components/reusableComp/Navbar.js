import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
<nav>
   <h5> <NavLink  to="/">rajiss-ctrl</NavLink></h5>
   <ul>
       <li><NavLink  to="/">Home</NavLink></li>
       <li><NavLink  to="/about">About</NavLink></li>
       <li><NavLink to="/contact">Contacts</NavLink></li>
   </ul>
</nav>

    </div>
  )
}

export default Navbar