/** @jsx jsx */
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import { jsx, Themed } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import Excerpt from "../components/Excerpt";
import Layout from "../layout";

function ProjectTemplate({ data }) {
  const projectNode = data.mdx;
  const project = projectNode;

  return (
    <Layout>
      <Helmet>
        <title>{`${project.frontmatter.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <Container container>
        <Themed.h1>{project.frontmatter.title}</Themed.h1>
        <Excerpt>{project.fields.description}</Excerpt>
        <MDXRenderer>{project.body}</MDXRenderer>
      </Container>
    </Layout>
  );
}

export default ProjectTemplate;

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
