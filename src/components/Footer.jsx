/** @jsx jsx */
import { Link } from "gatsby";
import { Component } from "react";
import { jsx } from "theme-ui";

class Footer extends Component {
  render() {
    return (
      <footer
        sx={{
          py: 4,
          width: "100%",
          maxWidth: "wide",
          mx: "auto",
          px: [3, 2, 2, 2, 0]
        }}
      >
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            fontSize: 0
          }}
        >
          <Link
            to="/"
            sx={{
              variant: "styles.navitem"
            }}
          >
            Sam Gamage
          </Link>
          <Link
            to="/projects"
            sx={{
              variant: "styles.navitem"
            }}
          >
            Projects
          </Link>
          <Link
            as={Link}
            to="/blog"
            sx={{
              variant: "styles.navitem"
            }}
          >
            Blog
          </Link>
          <Link
            to="/about"
            sx={{
              variant: "styles.navitem"
            }}
          >
            About me
          </Link>
          <div sx={{ mx: "auto" }} />
          <div sx={{ my: 2, variant: "styles.navitem" }}>
            © {new Date().getFullYear()} Samuel Gamage
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
