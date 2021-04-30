import React from "react"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"

export default function Blog(props) {
  const allPosts = props.data.post.edges
  return (
    <>
      <SEO title="Blog" />
      {allPosts.map(post => (
        <li key={post.node.id} style={{ listStyle: "none" }}>
          <h3>{post.node.title}</h3>
          <p>{post.node.summary}</p>
          <Link to={`/blog/${post.node.slug.current}`}>Read More</Link>
        </li>
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query blogPageQuery {
    post: allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          publishedAt
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
