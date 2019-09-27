/** @jsx jsx */
import {graphql} from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Helmet from "react-helmet"
import {jsx, Styled} from "theme-ui"
import config from "../../config/SiteConfig"
import Container from "../components/Container"
import Layout from "../layout"

const AboutPage = ({data}) => {
  const {
    imageSharp: {fixed},
    file: {publicURL: resumeDownloadRelativePath},
  } = data

  let downloadLink

  if (process.env.NODE_ENV === "development") {
    downloadLink = `http://localhost:9000${resumeDownloadRelativePath}`
  } else {
    downloadLink = `${config.siteUrl}${resumeDownloadRelativePath}`
  }

  return (
    <Layout>
      <React.Fragment>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Container container>
          <Img fixed={fixed} />
          <Styled.p>
            Samuel Gamage is an Atlanta-based software developer. Samuel is
            currently attending the{" "}
            <Styled.a href="https://www.gatech.edu/" target="_blank">
              Georgia Institute of Technology
            </Styled.a>{" "}
            to study computer science.
          </Styled.p>
          <Styled.p>
            Samuel is looking to pursue a career in software development with an
            emphasis on web development and artificial intelligence and the
            merging of the two sub fields.
          </Styled.p>
          <Styled.p>
            Samuel is currently employed with{" "}
            <Styled.a
              href="https://www.datafusionspecialists.com"
              target="_blank"
            >
              Data Fusion Specialists
            </Styled.a>{" "}
            where he has been working on rearchitecting their corporate website
            and constructuing a reusable web component library.
          </Styled.p>
          <Styled.p>
            <Styled.a href={downloadLink}>Resume</Styled.a>
          </Styled.p>
        </Container>
      </React.Fragment>
    </Layout>
  )
}

export const query = graphql`
  {
    imageSharp(id: {eq: "204f362f-bc8e-55fe-a92c-2e4bab53cfcc"}) {
      fixed(width: 300, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp_tracedSVG
      }
    }
    file(id: {eq: "92b2ec03-12ee-5b4c-8cda-d576ced502d6"}) {
      publicURL
    }
  }
`

export default AboutPage
