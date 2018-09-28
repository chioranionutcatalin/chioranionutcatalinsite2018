import React from 'react'
import Link from 'gatsby-link'
// <Link to="/sometoughts">Sometoughts</Link> in index
const Toughts = ({data}) => {
  return (
    <div>
      <h1>This is a small blog (Latest posts)</h1>
      {data.allMarkdownRemark.edges.map(post => ( 
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by: {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More...</Link>
            <br />
            <br />
            <hr />
          </div>    
      ))}
    </div>
  )
}
export const pageQuery = graphql`
 query BlogIndexQuery {
    
        allMarkdownRemark{
          edges{
            node{
               id
              frontmatter{
                path
                title
                date
                author
              }
            }
          }
        }
 }`

export default Toughts

