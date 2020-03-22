import { graphql } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import ProjectListing from "../components/ProjectListing";
import Layout from "../layout";

const Projects = props => {
  const {
    data: {
      allMdx: { edges: projectEdges }
    }
  } = props;
  return (
    <Layout>
      <Helmet title={`Projects | ${config.siteTitle}`} />
      <Container>
        <ProjectListing projectEdges={projectEdges} />
      </Container>
    </Layout>
  );
};

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
