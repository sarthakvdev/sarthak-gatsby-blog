import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from './assets/404.svg'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
  // Dark mode code starts ------------
  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  // to save current preferences in localStorage
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function returningUser() {
    if (typeof localStorage !== 'undefined') { 
      if(localStorage.getItem("dark")) {
        return true
      }
    }
    return false;
  }

  // returning the saved preference of darkMode
  function getInitialMode() {
    let savedMode = false;
    
    const isReturningUser = returningUser();
    
    if(typeof localStorage !== 'undefined') {
      savedMode = JSON.parse(localStorage.getItem("dark"));
    }
    
    const userPreferDark = getPreferColorScheme();
    // if mode was saved => light / dark
    if(isReturningUser) {
      return savedMode;
    } else if(userPreferDark) {
      return true;
      // otherwise => light
    } else {
      return false;
    }
  }

  function getPreferColorScheme() {
    if(typeof window !== 'undefined') {
      if (!window.matchMedia) return;

      return window.matchMedia("(prefers-color-scheme: dark)");
    }
    return false;
  }
  // Dark mode code ends --------------
  return (
    <div style={{
      backgroundColor: darkMode ? '#212121' : 'inherit',
      color: darkMode ? '#eee' : 'inherit'
    }}>
      <Layout location={location} title={siteTitle} darkMode={darkMode} toggleDarkMode={setDarkMode}>
        <SEO title="404: Not Found" />
        <h1>Oops! Where&#39;s the page?</h1>
        <p>You just hit a construction site... the sadness.</p>
        <img src={logo} alt='construction site'/>
      </Layout>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
