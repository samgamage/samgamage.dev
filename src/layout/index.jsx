import {Global} from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"
import {Styled, ThemeProvider} from "theme-ui"
import config from "../../config/SiteConfig"
import theme from "../../config/theme"
import Footer from "../components/Footer"
import Header from "../components/Header"
import components from "../components/Mdx"

export default class MainLayout extends React.Component {
  render() {
    const {children} = this.props
    return (
      <React.Fragment>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <ThemeProvider theme={theme} components={components}>
          <Global
            styles={{
              "*": {
                boxSizing: "border-box",
              },
              body: {
                margin: 0,
              },
            }}
          />
          <Styled.root>
            <Header />
            {children}
            <Footer config={config} />
          </Styled.root>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
