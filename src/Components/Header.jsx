import React,{useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.svg'

function Header() {
  let location=useLocation();
  const [url, setUrl] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)
  useEffect(()=>{
    setUrl(window.location.href.split('/').pop())
  },[location])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);
  return (
    <header>
        <div id="navbar">
            <div id="logo"><img src={logo} alt="Logo" /></div>
            <RxHamburgerMenu size={30} id='toggleMenu' onClick={()=>setToggleMenu(!toggleMenu)} color='white' />
            {
              windowWidth>780&&
                <div id="nav-menu">
                  <Link className={url===''&&"current-url greenFont"} to={'/'} >HOME</Link>
                  <Link className={url==='reservation'&&"current-url greenFont"} to={'/reservation'}>RESERVATION</Link>
                  <Link className={url==='ourservices'&&"current-url greenFont"} to={'/ourservices'}>OUR SERVICES</Link>
                  <Link className={url==='contactus'&&"current-url greenFont"} to={'/contactus'}>CONTACT US</Link>
                  <Link className={url==='gallery'&&"current-url greenFont"} to={'/gallery'}>GALLERY</Link>
                </div>
            }
        </div>
        {
              windowWidth<780&&toggleMenu&&
                <div id="nav-menu">
                  <Link className={url===''&&"current-url greenFont"} to={'/'} >HOME</Link>
                  <Link className={url==='reservation'&&"current-url greenFont"} to={'/reservation'}>RESERVATION</Link>
                  <Link className={url==='ourservices'&&"current-url greenFont"} to={'/ourservices'}>OUR SERVICES</Link>
                  <Link className={url==='contactus'&&"current-url greenFont"} to={'/contactus'}>CONTACT US</Link>
                  <Link className={url==='gallery'&&"current-url greenFont"} to={'/gallery'}>GALLERY</Link>
                </div>
        }
    </header>
  )
}

export default Header