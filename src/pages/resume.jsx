/** @jsx jsx */
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import React from "react"
import Helmet from "react-helmet"
import {jsx} from "theme-ui"
import config from "../../config/SiteConfig"
import Container from "../components/Container"
import Layout from "../layout"

const Resume = ({data}) => {
  return (
    <Layout>
      <React.Fragment>
        <Helmet title={`Resume | ${config.siteTitle}`} />
        <Container container>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Container>
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  fragment PostFields on Mdx {
    id
    parent {
      ... on File {
        name
        sourceInstanceName
      }
    }
    body
    fields {
      title
      slug
      date
    }
  }
  {
    mdx(id: {eq: "567c8799-17fc-5cbf-9ca4-f508dc30c9e3"}) {
      ...PostFields
    }
  }
`

export default Resume
