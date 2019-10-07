import {graphql} from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import config from "../../config/SiteConfig"
import Container from "../components/Container"
import PostListing from "../components/PostListing"
import Layout from "../layout"

const Blog = props => {
  const postEdges = props.data.allMdx.edges
  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Container>
        <PostListing postEdges={postEdges} />
      </Container>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogQuery {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
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
`
