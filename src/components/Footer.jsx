/** @jsx jsx */
import {Link} from "gatsby"
import {Component} from "react"
import {jsx, Styled} from "theme-ui"

class Footer extends Component {
  render() {
    const {config} = this.props
    const {copyright} = config
    if (!copyright) {
      return null
    }
    return (
      <footer
        sx={{
          py: 4,
          width: "100%",
          maxWidth: "wide",
          mx: "auto",
          px: [3, 2, 2, 2, 0],
        }}
      >
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            fontSize: 0,
          }}
        >
          <Styled.a
            as={Link}
            to="/"
            sx={{
              variant: "styles.navitem",
            }}
          >
            Sam Gamage
          </Styled.a>
          <Styled.a
            as={Link}
            to="/blog"
            sx={{
              variant: "styles.navitem",
            }}
          >
            Blog
          </Styled.a>
          <Styled.a
            as={Link}
            to="/about"
            sx={{
              variant: "styles.navitem",
            }}
          >
            About
          </Styled.a>
          <div sx={{mx: "auto"}} />
          <div sx={{my: 2, variant: "styles.navitem"}}>
            © 2019 Samuel Gamage
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
