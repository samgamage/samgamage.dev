/** @jsx jsx */
import dayjs from "dayjs";
import { Link } from "gatsby";
import React from "react";
import { jsx, Styled } from "theme-ui";
import NewAlert from "./NewAlert";

class ProjectListing extends React.Component {
  getProjectList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        title: postEdge.node.frontmatter.title,
        description: postEdge.node.fields.description
      });
    });

    return postList.filter(
      post => post.title !== "filler" || post.title === ""
    );
  }

  render() {
    const projectList = this.getProjectList();

    return (
      <React.Fragment>
        {projectList.length > 0 ? (
          projectList.map(project => {
            const newest = dayjs(project.date) > dayjs().subtract(1, "months");

            return (
              <React.Fragment>
                <div
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <Styled.h2>
                    <Styled.a
                      as={Link}
                      to={project.path}
                      key={project.title}
                      sx={{ textDecoration: "underline", color: "text" }}
                    >
                      {project.title}
                    </Styled.a>
                  </Styled.h2>
                  {newest && <NewAlert />}
                </div>
                <Styled.p>{project.description}</Styled.p>
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

export default ProjectListing;
