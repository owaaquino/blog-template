import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

const IndexPage = props => {
  const feturedPosts = props.data.post.edges
  return (
    <>
      <SEO title="Home" />
      <h2>Featured Blogs</h2>
      {feturedPosts.map(post => (
        <li key={post.node.id} style={{ listStyle: "none" }}>
          <h3>{post.node.title}</h3>
          <p>{post.node.summary}</p>
          <Link to={`/blog/${post.node.slug.current}`}>Read More</Link>
        </li>
      ))}
      <Link to="/page-2/">Go to page 2</Link> <br />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query homePageQuery {
    post: allSanityPost(filter: { featured: { eq: true } }) {
      edges {
        node {
          tags {
            id
            name
          }
          slug {
            current
          }
          id
          summary
          featured
          title
        }
      }
    }
  }
`
