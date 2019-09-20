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
          <Link to={post.path} key={post.title}>
            <Styled.h1>{post.title}</Styled.h1>
          </Link>
        ))}
      </React.Fragment>
    )
  }
}

export default PostListing
