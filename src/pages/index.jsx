import {graphql} from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import config from "../../config/SiteConfig"
import Container from "../components/Container"
import Layout from "../layout"

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMdx.edges
    return (
      <Layout>
        <Helmet title={config.siteTitle} />
        <Container>
          <p>index</p>
        </Container>
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
