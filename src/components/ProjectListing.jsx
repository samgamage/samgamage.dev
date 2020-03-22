/** @jsx jsx */
import dayjs from "dayjs";
import { Link } from "gatsby";
import React from "react";
import { jsx, Styled } from "theme-ui";
import NewAlert from "./NewAlert";

function ProjectListing({ projectEdges, showNew = false }) {
  const getProjectList = () => {
    const projectList = [];
    projectEdges.forEach(projectEdge => {
      projectList.push({
        path: projectEdge.node.fields.slug,
        date: projectEdge.node.frontmatter.date,
        title: projectEdge.node.frontmatter.title,
        description: projectEdge.node.fields.description
      });
    });

    return projectList.filter(
      post => post.title !== "filler" || post.title === ""
    );
  };

  const projectList = getProjectList();

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
                <Styled.h2 sx={{ my: 1 }}>
                  <Styled.a
                    as={Link}
                    to={project.path}
                    key={project.title}
                    sx={{ textDecoration: "underline", color: "text" }}
                  >
                    {project.title}
                  </Styled.a>
                </Styled.h2>
                {showNew && newest && <NewAlert />}
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

export default ProjectListing;
