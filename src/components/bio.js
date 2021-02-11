import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { Link } from 'gatsby'

const Bio = (props) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.0)
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
          userSelect: 'none'
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by {' '}
        <strong>
        <Link style={{
            color: props.darkMode ? '#5ea4c3' : '#007acc',
            boxShadow: 'none',
          }} href={`https://linktr.ee/sarthakv`} target='_blank'>
          {author.name}
        </Link>
        </strong> <br/> {author.summary}
      </p>
    </div>
  )
}

export default Bio
