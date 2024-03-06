import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.svg'

function Header() {
  return (
    <header>
        <div id="navbar">
            <div id="logo"><img src={logo} alt="Logo" /></div>
            <div id="nav-menu">
                <Link to={'/'} >HOME</Link>
                <Link to={'/reservation'}>RESERVATION</Link>
                <Link to={'/ourservices'}>OUR SERVICES</Link>
                <Link to={'/contactus'}>CONTACT US</Link>
                <Link to={'/gallery'}>GALLERY</Link>
            </div>
        </div>
    </header>
  )
}

export default Header