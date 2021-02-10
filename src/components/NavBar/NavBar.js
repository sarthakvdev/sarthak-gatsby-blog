import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks'
import Logo from './Logo'
import styled from 'styled-components'

// CSS Starts

const Navigation = styled.nav`
  height: 8vh;
  width: 100%;
  display: flex;
  background-color: ${props => props.darkmode ? '#1a1a1a' : '#fff'};
  position: flex;
  justify-content: space-between;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 2;
  align-self: center;
  transition: background-color 0.10s ease-out;

  @media (max-width: 600px) {
    position: sticky;
    height: 6vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  transform: translateX(10px);

  @media (max-width: 600px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: ${props => props.darkmode ? '#333' : '#eee'};
    transition: all 0.3s ease-in;
    top: 7.5vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: ${props => props.darkmode ? '#eee' : '#212121'};
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before, ::after {
    width: 30px;
    height: 3px;
    background-color: ${props => props.darkmode ? '#eee' : '#212121'};
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

// CSS over, JS starts

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    props.darkMode ? (
      // Dark mode navigation
      <Navigation darkmode>
      <Logo />

      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger darkmode open /> : <Hamburger darkmode />}
      </Toggle>
      
      {/* Nav Box On and Off */}
      {navbarOpen ? (
        <Navbox darkmode>
          <NavbarLinks darkMode={props.darkMode} />
        </Navbox>
      ) : (
        <Navbox darkmode open>
          <NavbarLinks darkMode={props.darkMode} />
        </Navbox>
      )}
      
    </Navigation>
    ) : (
      // light mode navigation
      <Navigation>
      <Logo />

      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks darkMode={props.darkMode}/>
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks darkMode={props.darkMode} />
        </Navbox>
      )}
      
    </Navigation>
    )
  )
}

export default Navbar