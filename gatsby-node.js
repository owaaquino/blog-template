const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allSanityPost {
        nodes {
          id
          slug {
            current
          }
          tags {
            name
            id
          }
        }
      }
    }
  `)

  const posts = data.allSanityPost.nodes

  posts.forEach(blog => {
    createPage({
      path: `blog/${blog.slug.current}`,
      component: path.resolve(`src/templates/post.js`),
      context: {
        slug: blog.slug.current,
      },
    })
  })
}
