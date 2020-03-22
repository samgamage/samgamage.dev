/** @jsx jsx */
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import {
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
  FaTwitter as Twitter,
  FaYoutube as Youtube
} from "react-icons/fa";
import { jsx, Styled } from "theme-ui";
import config from "../../config/SiteConfig";
import Button from "../components/Button";
import Container from "../components/Container";
import HorizontalList from "../components/HorziontalList";
import ProjectListing from "../components/ProjectListing";
import SEO from "../components/SEO";
import VerticalList from "../components/VerticalList";
import Layout from "../layout";

const Index = ({ data }) => {
  return (
    <Layout centered>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <Container mt={7} mb={7}>
          <Styled.h1>Hey, I&apos;m Samuel Gamage</Styled.h1>
          <Styled.p>
            I&apos;m a full stack software seveloper based in Atlanta, GA. In my
            spare time, I enojoy teaching others about coding on my{" "}
            <Styled.a
              href="https://www.youtube.com/channel/UCGEEpTZygTTS7099gplKJeg"
              title="Youtube"
            >
              YouTube
            </Styled.a>{" "}
            channel.
          </Styled.p>
          <HorizontalList spaceBetween={3}>
            <Styled.a
              href="https://twitter.com/samgamage24"
              title="Twitter"
              sx={{
                variant: "styles.navlink"
              }}
            >
              <Twitter size={24} />
            </Styled.a>
            <Styled.a
              href="https://github.com/samgamage"
              title="GitHub"
              sx={{
                variant: "styles.navlink"
              }}
            >
              <GitHub size={24} />
            </Styled.a>
            <Styled.a
              href="https://www.youtube.com/channel/UCGEEpTZygTTS7099gplKJeg"
              title="Youtube"
              sx={{
                variant: "styles.navlink"
              }}
            >
              <Youtube size={24} />
            </Styled.a>
            <Styled.a
              href="https://www.linkedin.com/in/samuel-gamage-27b91816b/"
              title="LinkedIn"
              sx={{
                variant: "styles.navlink"
              }}
            >
              <LinkedIn size={24} />
            </Styled.a>
          </HorizontalList>
        </Container>
        <Container>
          <VerticalList>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Styled.h2 p={1}>Latest Projects</Styled.h2>
              <Button text="View all" href="/projects" />
            </div>
            <ProjectListing projectEdges={data.projects.edges} />
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Styled.h2 p={1}>Latest Posts</Styled.h2>
              <Button text="View all" href="/blog" />
            </div>
            <ProjectListing projectEdges={data.posts.edges} />
          </VerticalList>
        </Container>
      </Container>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  {
    projects: allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: ASC }
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
      sort: { fields: [frontmatter___date], order: ASC }
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
        }
      }
    }
  }
`;
