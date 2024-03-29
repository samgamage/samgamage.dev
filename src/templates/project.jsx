/** @jsx jsx */
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import {
  FaGithub as GitHub,
  FaExternalLinkAlt as ExternalLink,
} from "react-icons/fa";
import { jsx, Themed } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import Excerpt from "../components/Excerpt";
import HorizontalList from "../components/HorizontalList";
import Layout from "../layout";

function ProjectTemplate({ data }) {
  const projectNode = data.mdx;
  const project = projectNode;

  return (
    <Layout>
      <Helmet>
        <title>{`${project.frontmatter.title} | ${config.siteTitle}`}</title>
        <meta name="description" content={project.fields.description} />
      </Helmet>
      <Container container>
        <Themed.h1>{project.frontmatter.title}</Themed.h1>
        <HorizontalList spaceBetween={3}>
          {project.fields.url && <Link target="_blank" href={project.fields.url} title="Application"><ExternalLink size={24} /></Link>}
          {project.fields.source && <Link target="_blank" href={project.fields.source} title="GitHub"><GitHub size={24} /></Link>}
        </HorizontalList>
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
        source
        url
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`;
