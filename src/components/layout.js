import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import NavBar from "./NavBar/NavBar"
import DarkModeToggle from 'react-dark-mode-toggle'
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import './layout.css'

const Layout = ({ location, title, children, darkMode, toggleDarkMode}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header;

  const darkModeSwitch = (
    <DarkModeToggle
      onChange={() => toggleDarkMode(prevMode => !prevMode)}
      checked={darkMode}
      size={50}
      speed={2.5}
      className='darkModeToggle'
    />);

  if (location.pathname === rootPath) { // For Main page
    header = (
      <h1
        style={{
          ...scale(1.0),
          marginBottom: rhythm(1.4),
          marginTop: rhythm(1.4),
          fontFamily: `Inter`,
          userSelect: 'none'
        }}
      >
        <Link style={{ color: `inherit` }} to={`/`} >
          {title}
        </Link>
      </h1>
      )
  } else {      // For any other page than main page
    header = (
      <h3
        style={{
          fontFamily: `Inter`,
          marginTop: rhythm(1.1),
          userSelect: 'none'
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
      <footer className='footer' style={{
        borderTop: `2px solid ${darkMode ? '#333' : '#ccc'}`,
        padding: '15px 0 5px 0'
      }}>
        © {new Date().getFullYear()}, Built with ❤️ by
        {` `}
        <a style={{color: darkMode ? '#5ea4c3' : '#007acc'}} 
          href="https://sarthakverma.netlify.app">Sarthak</a>

        <div className='footer-icons'>
          <a className='icons' href="https://github.com/sarthakvdev" target="_blank"><AiFillGithub /></a>
          <a className='icons' href="https://twitter.com/srthkv" target="_blank"><AiOutlineTwitter /></a>
          <a className='icons' href="https://linkedin.com/in/sarthakv" target="_blank"><AiFillLinkedin /></a>
          <a className='icons' href="mailto:sarthakvdev@gmail.com" target="_blank"><MdEmail /></a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
