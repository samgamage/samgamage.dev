/** @jsx jsx */
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import { jsx, Themed } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import Excerpt from "../components/Excerpt";
import Layout from "../layout";

function Page({ data }) {
  const page = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>{`${page.frontmatter.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <Container container>
        <Themed.h1>{page.frontmatter.title}</Themed.h1>
        <Excerpt>{page.fields.description}</Excerpt>
        <MDXRenderer>{page.body}</MDXRenderer>
      </Container>
    </Layout>
  );
}

export default Page;

export const pageQuery = graphql`
  query PageById($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      id
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
