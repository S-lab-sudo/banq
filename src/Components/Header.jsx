import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.svg'

function Header() {
  let location=useLocation();
  const [url, setUrl] = useState('')
  useEffect(()=>{
    console.log(window.location.href.split('/').pop())
    setUrl(window.location.href.split('/').pop())
  },[location])
  return (
    <header>
        <div id="navbar">
            <div id="logo"><img src={logo} alt="Logo" /></div>
            <div id="nav-menu">
                <Link className={url===''?"current-url":""} to={'/'} >HOME</Link>
                <Link className={url==='reservation'?"current-url":""} to={'/reservation'}>RESERVATION</Link>
                <Link className={url==='ourservices'?"current-url":""} to={'/ourservices'}>OUR SERVICES</Link>
                <Link className={url==='contactus'?"current-url":""} to={'/contactus'}>CONTACT US</Link>
                <Link className={url==='gallery'?"current-url":""} to={'/gallery'}>GALLERY</Link>
            </div>
        </div>
    </header>
  )
}

export default Header