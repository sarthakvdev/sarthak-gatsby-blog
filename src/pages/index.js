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
    if(localStorage.getItem("dark")) {
      return true
    }
    return false;
  }

  // returning the saved preference of darkMode
  function getInitialMode() {
    const isReturningUser = returningUser();
    const savedMode = JSON.parse(localStorage.getItem("dark"));
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
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)");
  }

  return (
    <div style={{
      backgroundColor: darkMode ? '#212121' : '#fff',
      height: `100%`,
      color: darkMode ? '#fff' : 'inherit',
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
