/** @jsx jsx */
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import {
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
  FaTwitter as Twitter,
} from "react-icons/fa"
import {jsx, Styled} from "theme-ui"
import config from "../../config/SiteConfig"
import Container from "../components/Container"
import HorizontalList from "../components/HorziontalList"
import Layout from "../layout"

const Index = props => {
  const postEdges = props.data.allMdx.edges

  return (
    <Layout centered>
      <Helmet title={config.siteTitle} />
      <Container>
        <Styled.h1
          sx={{
            variant: "styles.headinglarge",
          }}
        >
          Samuel Gamage
        </Styled.h1>
        <Styled.p>Software Developer based in Atlanta, GA</Styled.p>
        <HorizontalList spaceBetween={3}>
          <Styled.a
            href="https://twitter.com/sambgamage"
            title="Twitter"
            sx={{
              variant: "styles.navlink",
            }}
          >
            <Twitter size={24} />
          </Styled.a>
          <Styled.a
            href="https://github.com/samgamage"
            title="GitHub"
            sx={{
              variant: "styles.navlink",
            }}
          >
            <GitHub size={24} />
          </Styled.a>
          <Styled.a
            href="https://www.linkedin.com/in/samuel-gamage-27b91816b/"
            title="LinkedIn"
            sx={{
              variant: "styles.navlink",
            }}
          >
            <LinkedIn size={24} />
          </Styled.a>
        </HorizontalList>
      </Container>
    </Layout>
  )
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
