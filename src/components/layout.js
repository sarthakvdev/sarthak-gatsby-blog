import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import NavBar from "./NavBar/NavBar"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header;

  if (location.pathname === rootPath) { // For Main page
    header = (
      <h1
        style={{
          ...scale(1.1),
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
    
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(0.4)} ${rhythm(1 / 4)}`,
        margin: '0px auto',
        textJustify: 'center'
      }}
    >
       {/* <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler> */}

      <NavBar/>
      <header>{header}</header>
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

export default Layout
