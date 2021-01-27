import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  // Dark mode code starts -------------
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // to save current preferences in localStorage
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  // returning the saved preference of darkMode
  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
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

  // Dark Mode code over ---------

  return (
    <div style={{
      backgroundColor: darkMode ? '#212121' : 'inherit',
      color: darkMode ? '#eee' : 'inherit'
    }}>
      <Layout location={location} title={siteTitle} darkMode={darkMode} toggleDarkMode={setDarkMode}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            
            {/* Title of the blog */}
            <h1
              style={{
                fontFamily: 'Helvetica',
                marginTop: rhythm(1.0),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            
            {/* Date in header */}
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginTop: '5px',
                marginBottom: rhythm(1),
                fontFamily: 'Helvetica',
                fontSize: '0.9em'
              }}
            >
              Published on <b>{post.frontmatter.date}</b>
            </p>
          </header>

          {/* This is the Markdown part */}
          <section 
            dangerouslySetInnerHTML={{ __html: post.html }} 
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
