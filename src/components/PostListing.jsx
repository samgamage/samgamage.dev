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
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    return (
      <React.Fragment>
        {postList.map(post => (
          <Styled.a
            as={Link}
            to={post.path}
            key={post.title}
            sx={{textDecoration: "underline", color: "text"}}
          >
            <Styled.h2>{post.title}</Styled.h2>
          </Styled.a>
        ))}
      </React.Fragment>
    )
  }
}

export default PostListing
