import React from "react"
import { graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"

const Post = props => {
  const post = props.data.post
  return (
    <>
      <h1>{post.title}</h1>
      <PortableText blocks={post._rawBody} />
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      publishedAt
      featured
      slug {
        current
      }
      title
      tags {
        id
        name
      }
      id
      _rawBody(resolveReferences: { maxDepth: 10 })
      body {
        _key
        _type
        style
        list
        children {
          _key
          _type
          marks
          text
        }
      }
      mainImage {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
