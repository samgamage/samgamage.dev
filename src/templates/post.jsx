import {graphql} from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import config from "../../config/SiteConfig"
import SocialLinks from "../components/SocialLinks"
import UserInfo from "../components/UserInfo"
import Layout from "../layout"

export default class PostTemplate extends React.Component {
  render() {
    const {data, pageContext} = this.props
    const postNode = data.mdx
    const post = postNode
    console.log(post)
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.frontmatter.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <div>
            <h1>{post.frontmatter.title}</h1>
            <div className="post-meta">
              <SocialLinks postPath={post.fields.slug} postNode={postNode} />
            </div>
            <UserInfo config={config} />
          </div>
        </div>
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
