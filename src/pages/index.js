import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  // useState to toggle dark mode state
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
    
    // const userPreferDark = getPreferColorScheme();
    // if mode was saved => light / dark
    if(isReturningUser) {
      return savedMode;
    } else {
      return false;
    }
    // else if(userPreferDark) {
    //   return true;
    //   // otherwise => light
    // } 
  }

  // function getPreferColorScheme() {
  //   if(typeof window !== 'undefined') {
  //     if (!window.matchMedia) return;

  //     return window.matchMedia("(prefers-color-scheme: dark)");
  //   }
  //   return false;
  // }

  return (
    <div style={{
      backgroundColor: darkMode ? '#212121' : '#fff',
      height: `100%`,
      color: darkMode ? '#fff' : 'inherit',
      transition: 'background-color 0.10s ease-out'
    }}>

      <Layout location={location} title={siteTitle} darkMode={darkMode} toggleDarkMode={setDarkMode}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
      </Layout>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
