import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import NavBar from "./NavBar/NavBar"
import DarkModeToggle from 'react-dark-mode-toggle'
import styled from 'styled-components'

const Layout = ({ location, title, children, darkMode, toggleDarkMode}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header;

  const darkModeSwitch = (
    <DarkModeSwitch
      onChange={() => toggleDarkMode(prevMode => !prevMode)}
      checked={darkMode}
      size={50}
      speed={3.5}
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
        maxWidth: rhythm(24),
        padding: `${rhythm(0.4)} ${rhythm(1 / 4)}`,
        margin: '0px auto',
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
      <hr></hr>
      <footer>
        © {new Date().getFullYear()}, Built with ❤️ by
        {` `}
        <a href="https://sarthakverma.netlify.app">Sarthak</a>
      </footer>
    </div>
  )
}

const DarkModeSwitch = styled(DarkModeToggle)`
  position: relative;
  display: inline-block;

  @media (max-width:600px) {
    size: 20px;
  }
`;

export default Layout
