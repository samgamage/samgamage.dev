/** @jsx jsx */
import dayjs from "dayjs";
import { Link } from "gatsby";
import React from "react";
import { jsx, Styled } from "theme-ui";
import NewAlert from "./NewAlert";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        description: postEdge.node.fields.description,
        timeToRead: postEdge.node.timeToRead
      });
    });

    return postList.filter(
      post => post.title !== "filler" || post.title === ""
    );
  }

  render() {
    const postList = this.getPostList();

    return (
      <React.Fragment>
        {postList.length > 0 ? (
          postList.map(post => {
            const newest = dayjs(post.date) > dayjs().subtract(1, "months");

            return (
              <React.Fragment>
                <div sx={{ display: "flex", alignItems: "center" }}>
                  <Styled.h2 sx={{ my: 1 }}>
                    <Styled.a
                      as={Link}
                      to={post.path}
                      key={post.title}
                      sx={{ textDecoration: "underline", color: "text" }}
                    >
                      {post.title}
                    </Styled.a>
                  </Styled.h2>
                  {newest && <NewAlert />}
                </div>
                <Styled.p sx={{ color: "gray" }}>
                  {post.date} • {post.timeToRead} minute read
                </Styled.p>
                <Styled.p>{post.description}</Styled.p>
              </React.Fragment>
            );
          })
        ) : (
          <Styled.p>No posts yet</Styled.p>
        )}
      </React.Fragment>
    );
  }
}

export default PostListing;
