import React from 'react'
import { Link } from 'react-router-dom' 
import './../css/styles.css'

const Navbar = () => {
  return (
    <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/form">Form</Link></li>
        </ul>
    </>
  )
}

export default Navbar