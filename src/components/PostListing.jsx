/** @jsx jsx */
import {Link} from "gatsby"
import React from "react"
import {jsx, Styled} from "theme-ui"

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
      })
    })
    return postList.filter(post => post.title !== "filler")
  }

  render() {
    const postList = this.getPostList()
    return (
      <React.Fragment>
        {postList.length > 0 ? (
          postList.map(post => (
            <React.Fragment>
              <Styled.a
                as={Link}
                to={post.path}
                key={post.title}
                sx={{textDecoration: "underline", color: "text"}}
              >
                <Styled.h2>{post.title}</Styled.h2>
              </Styled.a>
              <Styled.p>{post.date}</Styled.p>
              <Styled.p>{post.excerpt}</Styled.p>
            </React.Fragment>
          ))
        ) : (
          <Styled.p>No posts yet</Styled.p>
        )}
      </React.Fragment>
    )
  }
}

export default PostListing