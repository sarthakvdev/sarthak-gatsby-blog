import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const About = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    // Dark mode code starts -------------
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // to save current preferences in localStorage
  useEffect(() => {
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
    
    if(isReturningUser) return savedMode
    else  return false
  }

  // Dark Mode code over ---------

    return (
        <div style={{
            backgroundColor: darkMode ? '#1a1a1a' : 'inherit',
             color: darkMode ? '#f2f2f2' : 'inherit',
             transition: 'background-color 0.10s ease-out'
        }}>
            <Layout location={location} title={siteTitle} darkMode={darkMode} toggleDarkMode={setDarkMode}>
                <h3>What is Inquisitive?</h3>
                <div>
                    <p>Welcome to Inquisitive. I attempt to understand and learn the world around me by writing here. Since childhood, I've been that curious child, who never ceased asking questions. And I've no plans to stop being one.</p>
                    <p>I write to document my learning, journey and the observations I find intriguing and thought-provoking.</p>
                    <p>I write my learning and notes from Software development, Designing, Creative Writing and BOOKS!</p>
                </div>

                <h3>Why you should read?</h3>
                <p>As a Generalist and a tireless learner, I keep uncovering and gaining experience. I plan, write and execute my ambitions; whether they result in a failure or a success, I'm learning from them.</p>
                <p>I want to share the best of them with you.</p>
            </Layout>
        </div>
    )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
