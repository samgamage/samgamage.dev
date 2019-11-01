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
        description: postEdge.node.fields.description,
      })
    })

    return postList.filter(post => post.title !== "filler" || post.title === "")
  }

  render() {
    const postList = this.getPostList()

    return (
      <React.Fragment>
        {postList.length > 0 ? (
          postList.map(post => (
            <React.Fragment>
              <Styled.h2>
                <Styled.a
                  as={Link}
                  to={post.path}
                  key={post.title}
                  sx={{textDecoration: "underline", color: "text"}}
                >
                  {post.title}
                </Styled.a>
              </Styled.h2>

              <Styled.p>{post.date}</Styled.p>
              <Styled.p>{post.description}</Styled.p>
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
