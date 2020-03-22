/** @jsx jsx */
import { Link } from "gatsby";
import React from "react";
import { jsx, Styled } from "theme-ui";

class ProjectListing extends React.Component {
  getProjectList() {
    const projectList = [];
    this.props.projectEdges.forEach(projectEdge => {
      projectList.push({
        path: projectEdge.node.fields.slug,
        title: projectEdge.node.frontmatter.title,
        description: projectEdge.node.fields.description
      });
    });

    return projectList.filter(
      post => post.title !== "filler" || post.title === ""
    );
  }

  render() {
    const projects = this.getProjectList();

    return (
      <React.Fragment>
        {projects.length > 0 ? (
          projects.map(project => (
            <React.Fragment key={project.path}>
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
              <Styled.p>{project.description}</Styled.p>
            </React.Fragment>
          ))
        ) : (
          <Styled.p>No projects yet</Styled.p>
        )}
      </React.Fragment>
    );
  }
}

export default ProjectListing;
