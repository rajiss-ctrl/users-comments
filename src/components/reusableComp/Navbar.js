import React from 'react'
import {  Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
<nav>
   <h5><Link  to="/users-comments">rajiss-ctrl</Link></h5>
   <ul>
       <li><Link  to="/users-comments">Home</Link></li>
       <li><Link  to="/about">About</Link></li>
       <li><Link to="/contact">Contacts</Link></li>
   </ul>
</nav>

    </div>
  )
}

export default Navbar