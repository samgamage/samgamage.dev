/** @jsx jsx */
import dayjs from "dayjs";
import { Link } from "gatsby";
import { jsx, Paragraph, Themed } from "theme-ui";
import NewAlert from "./NewAlert";
import VerticalList from "./VerticalList";

function ProjectListing({ projectEdges, showNew = true }) {
  const getProjectList = () => {
    const projectList = [];
    projectEdges.forEach((projectEdge) => {
      projectList.push({
        path: projectEdge.node.fields.slug,
        date: projectEdge.node.frontmatter.date,
        title: projectEdge.node.frontmatter.title,
        description: projectEdge.node.fields.description,
      });
    });

    return projectList.filter(
      (post) => post.title !== "filler" || post.title === ""
    );
  };

  const projectList = getProjectList();

  if (!projectList.length) {
    return <Paragraph>No projects yet</Paragraph>;
  }

  return (
    <VerticalList spaceBetween={3}>
      {projectList.map((project) => {
        const isNew = dayjs(project.date) > dayjs().subtract(1, "months");

        return (
          <div key={project.path}>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Themed.h3 sx={{ mb: 1, mt: 0 }}>
                <Link
                  to={project.path}
                  activeClassName="active"
                  sx={{
                    variant: "styles.a",
                  }}
                >
                  {project.title}
                </Link>
              </Themed.h3>
              {showNew && isNew && <NewAlert />}
            </div>
            <Paragraph mt={1}>{project.description}</Paragraph>
          </div>
        );
      })}
    </VerticalList>
  );
}

export default ProjectListing;
