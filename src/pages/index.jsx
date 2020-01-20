/** @jsx jsx */
import Helmet from "react-helmet";
import { FaGithub as GitHub, FaLinkedin as LinkedIn, FaMedium as Medium, FaTwitter as Twitter, FaYoutube as Youtube } from "react-icons/fa";
import { jsx, Styled } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import HorizontalList from "../components/HorziontalList";
import SEO from "../components/SEO";
import Layout from "../layout";

const Index = () => {
  return (
    <Layout centered>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <Styled.h1>Samuel Gamage</Styled.h1>
        <Styled.p>Software Developer based in Atlanta, GA</Styled.p>
        <HorizontalList spaceBetween={3}>
          <Styled.a
            href="https://twitter.com/samgamage24"
            title="Twitter"
            sx={{
              variant: "styles.navlink"
            }}
          >
            <Twitter size={24} />
          </Styled.a>
          <Styled.a
            href="https://github.com/samgamage"
            title="GitHub"
            sx={{
              variant: "styles.navlink"
            }}
          >
            <GitHub size={24} />
          </Styled.a>
          <Styled.a
            href="https://www.youtube.com/channel/UCGEEpTZygTTS7099gplKJeg"
            title="Youtube"
            sx={{
              variant: "styles.navlink"
            }}
          >
            <Youtube size={24} />
          </Styled.a>
          <Styled.a
            href="https://www.linkedin.com/in/samuel-gamage-27b91816b/"
            title="LinkedIn"
            sx={{
              variant: "styles.navlink"
            }}
          >
            <LinkedIn size={24} />
          </Styled.a>
          <Styled.a
            href="https://medium.com/@sambgamage"
            title="Medium"
            sx={{
              variant: "styles.navlink"
            }}
          >
            <Medium size={24} />
          </Styled.a>
        </HorizontalList>
      </Container>
    </Layout>
  );
};

export default Index;
