import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import ProjectListing from "../components/ProjectListing";
import VerticalList from "../components/VerticalList";
import Layout from "../layout";

function Projects(props) {
  const {
    data: {
      allMdx: { edges: projectEdges },
    },
  } = props;

  return (
    <Layout>
      <Helmet title={`Projects | ${config.siteTitle}`} />
      <Container>
        <VerticalList spaceBetween={4}>
          <ProjectListing projectEdges={projectEdges} />
        </VerticalList>
      </Container>
    </Layout>
  );
}

export default Projects;

export const pageQuery = graphql`
  query ProjectsQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          fields {
            slug
            description
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          timeToRead
        }
      }
    }
  }
`;
