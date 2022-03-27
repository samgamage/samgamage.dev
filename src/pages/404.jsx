/** @jsx jsx */
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { Heading, jsx } from "theme-ui";
import config from "../../config/SiteConfig";
import Container from "../components/Container";
import SEO from "../components/SEO";
import Layout from "../layout";

function NotFound() {
  return (
    <Layout centered>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Container>
        <Heading as="h1">404</Heading>
        <Heading as="h2">
          Page not found. <Link to="/">Go back.</Link>
        </Heading>
      </Container>
    </Layout>
  );
}

export default NotFound;
