import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import NavBar from "./NavBar/NavBar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.2),
          marginBottom: rhythm(1.4),
          marginTop: rhythm(1.5)
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
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: '0',
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
