import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import NavBar from "./NavBar/NavBar"
import DarkModeToggle from 'react-dark-mode-toggle'
import styled from 'styled-components'

const Layout = ({ location, title, children, darkMode, toggleDarkMode}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header;

  // Styled DarkModeSwitch
  const DarkModeSwitch = styled(DarkModeToggle)`
  position: relative;
  display: inline-block;

  @media (max-width:600px) {
    size: 20px;
  }
  `;

  const darkModeSwitch = (
    <DarkModeSwitch
      onChange={() => toggleDarkMode(prevMode => !prevMode)}
      checked={darkMode}
      size={50}
      speed={1.0}
    />);

  if (location.pathname === rootPath) { // For Main page
    header = (
      <h1
        style={{
          ...scale(1.0),
          marginBottom: rhythm(1.4),
          marginTop: rhythm(1.4),
          fontFamily: `Inter`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      )
  } else {      // For Blog-post page
    header = (
      <h3
        style={{
          fontFamily: `Inter`,
          marginTop: rhythm(1.1),
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <div style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(25),
        padding: `${rhythm(0.4)} ${rhythm(1 / 4)}`,
        textJustify: 'center'
      }}
    >

      <NavBar darkMode={darkMode}/>

      <header style={{
        display:`flex`,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {header}
        {darkModeSwitch}
      </header>
      <main>{children}</main>
      <footer style={{
        borderTop: `2px solid ${darkMode ? '#333' : '#ccc'}`,
        padding: '15px 0 5px 0'
      }}>
        © {new Date().getFullYear()}, Built with ❤️ by
        {` `}
        <a style={{color: darkMode ? '#5ea4c3' : '#007acc'}} 
          href="https://sarthakverma.netlify.app">Sarthak</a>
      </footer>
    </div>
  )
}

export default Layout
