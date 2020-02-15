/** @jsx jsx */
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import { jsx, Styled } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import Layout from "../layout";

const Text = styled.p`
  color: white;
  padding: 1rem;
  border-radius: 5px;
`;

const ProjectTemplate = ({ data }) => {
  const projectNode = data.mdx;
  const project = projectNode;

  return (
    <Layout>
      <Helmet>
        <title>{`${project.frontmatter.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <Container container>
        <Styled.h1>{project.frontmatter.title}</Styled.h1>
        <Text sx={{ backgroundColor: "washed", color: "text.default" }}>
          {project.fields.description}
        </Text>
        <MDXRenderer>{project.body}</MDXRenderer>
      </Container>
    </Layout>
  );
};

export default ProjectTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectById($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      id
      timeToRead
      wordCount {
        words
      }
      excerpt(pruneLength: 160)
      fields {
        slug
        description
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
