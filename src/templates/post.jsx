import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import React from "react"
import Helmet from "react-helmet"
import {Styled} from "theme-ui"
import config from "../../config/SiteConfig"
import Container from "../components/Container"
import SocialLinks from "../components/SocialLinks"
import UserInfo from "../components/UserInfo"
import Layout from "../layout"

export default class PostTemplate extends React.Component {
  render() {
    const {data, pageContext} = this.props
    const postNode = data.mdx
    const post = postNode
    console.log(data)
    console.log(pageContext)
    return (
      <Layout>
        <Helmet>
          <title>{`${post.frontmatter.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <Container container>
          <Styled.h1>{post.frontmatter.title}</Styled.h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <SocialLinks postPath={post.fields.slug} postNode={postNode} />
          <UserInfo config={config} />
        </Container>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    mdx(fields: {id: {eq: $id}}) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
