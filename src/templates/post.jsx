/** @jsx jsx */
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import { jsx, Styled } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import SEO from "../components/SEO";
import SocialLinks from "../components/SocialLinks";
import UserInfo from "../components/UserInfo";
import Layout from "../layout";

const Text = styled.p`
  color: white;
  padding: 1rem;
  border-radius: 5px;
`;

const PostTemplate = ({ data }) => {
  const postNode = data.mdx;
  const post = postNode;

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={post.fields.slug} postNode={postNode} postSEO />
      <Container container>
        <Styled.h1>{post.frontmatter.title}</Styled.h1>
        <Styled.p sx={{ color: "gray" }}>
          {post.timeToRead} minute read • {post.wordCount.words} words
        </Styled.p>
        <Text sx={{ backgroundColor: "washed", color: "text.default" }}>
          {post.fields.description}
        </Text>
        <MDXRenderer>{post.body}</MDXRenderer>
        <SocialLinks postPath={post.fields.slug} postNode={postNode} />
        <UserInfo config={config} />
      </Container>
    </Layout>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
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
