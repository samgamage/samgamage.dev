/** @jsx jsx */
import {Link} from "gatsby"
import {Component} from "react"
import {FaGithub as GitHub, FaTwitter as Twitter} from "react-icons/fa"
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
          px: 3,
          py: 5,
          width: "100%",
          maxWidth: "wide",
          mx: "auto",
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
              mr: 3,
            }}
          >
            Sam Gamage
          </Styled.a>
          <Styled.a
            as={Link}
            to="/blog"
            sx={{
              variant: "styles.navitem",
              mr: 3,
            }}
          >
            Blog
          </Styled.a>
          <Styled.a
            as={Link}
            to="/about"
            sx={{
              variant: "styles.navitem",
              mr: 4,
            }}
          >
            About
          </Styled.a>
          <div sx={{mx: "auto"}} />
          <a
            href="https://twitter.com/jxnblk"
            title="Twitter"
            sx={{
              variant: "styles.navitem",
              mx: 3,
            }}
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://github.com/jxnblk"
            title="GitHub"
            sx={{
              variant: "styles.navitem",
            }}
          >
            <GitHub size={24} />
          </a>
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
