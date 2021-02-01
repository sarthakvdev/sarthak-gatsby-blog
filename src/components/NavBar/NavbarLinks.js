import React from 'react'
import { Link } from 'gatsby' // Navigate between internal-pages
import './navbarlinks.css'

const NavbarLinks = (props) => {
  const isDark = props.darkMode;
  
    return (
        <div>
            <Link className={isDark ? 'nav-item-dark' : 'nav-item'} to='/404'>Book Notes</Link>
            <a className={isDark ? 'nav-item-dark' : 'nav-item'} href='mailto:sarthakvdev@gmail.com' target='_'>Contact</a>
            <Link className={isDark ? 'nav-item-dark' : 'nav-item'} to='/404'>About</Link>
        </div>
    )
}

export default NavbarLinks