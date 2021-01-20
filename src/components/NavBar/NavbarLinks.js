import React from 'react'
import { Link } from 'gatsby' // To navigate between pages
import styled from 'styled-components'

console.log(styled);

const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
    color: transparent;
    background: #007acc;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #007acc;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
    return (
        <>
            <NavItem to='/404'>Book Notes</NavItem>
            <NavItem href='mailto:sarthakvdev@gmail.com' target='_'>Contact</NavItem>
            <NavItem to='/'>About</NavItem>
        </>
    )
}

export default NavbarLinks