import React, {Component} from "react"
import Helmet from "react-helmet"
import config from "../../config/SiteConfig"
import About from "../components/About"
import Layout from "../layout"

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    )
  }
}

export default AboutPage
