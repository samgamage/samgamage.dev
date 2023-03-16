/** @jsx jsx */
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import {
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
  FaYoutube as Youtube,
} from "react-icons/fa";
import { Box, jsx, Link, Paragraph, Themed } from "theme-ui";
import config from "../../config/SiteConfig";
import Button from "../components/Button";
import Container from "../components/Container";
import HorizontalList from "../components/HorziontalList";
import ProjectListing from "../components/ProjectListing";
import SEO from "../components/SEO";
import VerticalList from "../components/VerticalList";
import Layout from "../layout";

function Index({ data }) {
  return (
    <Layout centered>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <Box mt={5} mb={5}>
          <Themed.h1>Hey, I&apos;m Samuel Gamage</Themed.h1>
          <Paragraph mt={0}>
            I&apos;m a full stack software engineer. You
            can check out my recent projects below.
          </Paragraph>
          <HorizontalList mt={3} spaceBetween={3}>
            <Link href="https://github.com/samgamage" title="GitHub">
              <GitHub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/samuel-gamage-27b91816b/"
              title="LinkedIn"
            >
              <LinkedIn size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCGEEpTZygTTS7099gplKJeg"
              title="Youtube"
            >
              <Youtube size={24} />
            </Link>
          </HorizontalList>
        </Box>
        <VerticalList spaceBetween={4}>
          <VerticalList>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Themed.h2 sx={{ mt: 3, mb: 3 }}>Latest Projects</Themed.h2>
              <Button text="View all" href="/projects" />
            </div>
            <ProjectListing projectEdges={data.projects.edges} />
          </VerticalList>
          {/* <VerticalList>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Themed.h2 sx={{ mt: 3, mb: 3 }}>Latest Posts</Themed.h2>
              <Button text="View all" href="/blog" />
            </div>
            <PostListing postEdges={data.posts.edges} />
          </VerticalList> */}
        </VerticalList>
      </Container>
    </Layout>
  );
}

export default Index;

export const pageQuery = graphql`
  {
    projects: allMdx(
      limit: 3
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
        }
      }
    }
    posts: allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { type: { eq: "post" } } }
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
