/** @jsx jsx */
import Helmet from "react-helmet";
import { jsx, Styled } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Layout from "../layout";

const NotFound = () => {
  return (
    <Layout centered>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <Styled.h1>404</Styled.h1>
        <Styled.h2>
          Page not found. <Styled.a href="/">Go back.</Styled.a>
        </Styled.h2>
      </Container>
    </Layout>
  );
};

export default NotFound;
