import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import './navigation.styles.css'
import Dropdown from '../../components/dropdown/dropdown-component'

function NavBar () {

  const [click , setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };


const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

return(
  <>
    <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
      PET EXPO <i class="fa-solid fa-shield-dog"></i>
      </Link>
    <div className='menu-icon' onClick={handleClick}>

      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

    </div>

       <ul className={click ? 'nav-menu active' : 'nav-menu'}>

         <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
          Home
          </Link>
         </li>

         <li
          className='nav-item' 
         onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
         >
        
          <Link  className='nav-links' onClick={closeMobileMenu}>
          Pets 
          <i className='fas fa-caret-down' />
          </Link>
           {dropdown && <Dropdown />}
         </li>

         <li className='nav-item'>
          <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>About Us</Link>
         </li>

         <li className='nav-item'>
         <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
         </li>

       </ul>
    </nav>
    
   
  </>
)

}

export default NavBar