import React from 'react'
import { Link } from 'react-router-dom' 
import './../css/styles.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Checkout</Link></li>
            <li>Login</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar