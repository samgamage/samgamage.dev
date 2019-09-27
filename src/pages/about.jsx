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
    bioPic: {
      childImageSharp: {fixed},
    },
    resume: {publicURL: resumeDownloadRelativePath},
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

export default AboutPage

export const pageQuery = graphql`
  {
    bioPic: file(name: {eq: "bio_pic"}) {
      childImageSharp {
        fixed(quality: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    resume: file(name: {eq: "SamuelGamage-Resume-Fall2019"}) {
      publicURL
    }
  }
`
