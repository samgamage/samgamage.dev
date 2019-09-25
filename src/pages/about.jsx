/** @jsx jsx */
import React from "react"
import Helmet from "react-helmet"
import {
  FaGithub as GitHub,
  FaLinkedin as LinkedIn,
  FaTwitter as Twitter,
} from "react-icons/fa"
import {jsx, Styled} from "theme-ui"
import config from "../../config/SiteConfig"
import BioPic from "../../static/files/bio_pic.jpg"
import Container from "../components/Container"
import HorizontalList from "../components/HorziontalList"
import Layout from "../layout"

const AboutPage = () => (
  <Layout>
    <React.Fragment>
      <Helmet title={`About | ${config.siteTitle}`} />
      <Container container>
        <Styled.img
          src={BioPic}
          sx={{
            width: "50%",
          }}
        />
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
    </React.Fragment>
  </Layout>
)

export default AboutPage
