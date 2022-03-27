/** @jsx jsx */
import dayjs from "dayjs";
import { Link } from "gatsby";
import React from "react";
import { jsx, Paragraph, Themed } from "theme-ui";
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

    if (!postList.length) {
      return <Paragraph>No posts yet</Paragraph>;
    }

    return postList.map(post => {
      const isNew = dayjs(post.date) > dayjs().subtract(1, "months");

      return (
        <div key={post.path}>
          <div
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Themed.h3 sx={{ mb: 1, mt: 0 }}>
              <Link
                to={post.path}
                key={post.title}
                sx={{
                  variant: "styles.a"
                }}
              >
                {post.title}
              </Link>
            </Themed.h3>
            {isNew && <NewAlert />}
          </div>
          <Paragraph sx={{ color: "gray", mt: 1 }}>
            {post.date} • {post.timeToRead} minute read
          </Paragraph>
          <Paragraph sx={{ mt: 1 }}>{post.description}</Paragraph>
        </div>
      );
    });
  }
}

export default PostListing;
