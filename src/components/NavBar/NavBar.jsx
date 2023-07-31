import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
    <nav className='nav'>
    <div >
        <ul>
            <li ><Link className='li' to="/">Inicio</Link></li>
            <li><Link className='li' to="/servicios">Servicios</Link></li>
            <li><Link className='li' to="/contacto">Contacto</Link></li>
            <li><Link className='li' to="/login">Login</Link></li>
            <li className='li'>Logout</li>
            </ul>
            </div>
    </nav>
</div>
  )
}

export default NavBar