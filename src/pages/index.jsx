/** @jsx jsx */
import {graphql} from "gatsby"
import React from "react"
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

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <div
          sx={{
            variant: "styles.root",
            minHeight: "calc(100vh - 166px - 93px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <main
            sx={{
              width: "100%",
              maxWidth: "wide",
              mx: "auto",
              my: "auto",
            }}
          >
            <Container sx={{display: "flex", justifyContent: "center"}}>
              <Styled.h1>Samuel Gamage</Styled.h1>
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
          </main>
        </div>
      </Layout>
    )
  }
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
