/** @jsx jsx */
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import { jsx, Paragraph, Themed } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import Excerpt from "../components/Excerpt";
import SEO from "../components/SEO";
import SocialLinks from "../components/SocialLinks";
import UserInfo from "../components/UserInfo";
import Layout from "../layout";

function PostTemplate({ data }) {
  const postNode = data.mdx;
  const post = postNode;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={post.fields.slug} postNode={postNode} postSEO />
      <Container container>
        <Themed.h1>{post.frontmatter.title}</Themed.h1>
        <Paragraph sx={{ color: "gray" }}>
          {post.timeToRead} minute read • {post.wordCount.words} words
        </Paragraph>
        <Excerpt>{post.fields.description}</Excerpt>
        <MDXRenderer>{post.body}</MDXRenderer>
        <SocialLinks postPath={post.fields.slug} postNode={postNode} />
        <UserInfo config={config} />
      </Container>
    </Layout>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
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
