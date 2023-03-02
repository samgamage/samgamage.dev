/** @jsx jsx */
import { Link } from "gatsby";
import React from "react";
import { FaMoon as MoonFilled, FaRegMoon as MoonOutline } from "react-icons/fa";
import { jsx, useColorMode } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui";
import useScrollPosition from "../hooks/useScrollPosition";

const modes = ["light", ...Object.keys(theme.colors.modes)];

const ColorButton = ({ mode, ...props }) => (
  <button
    {...props}
    type="button"
    title="Toggle Dark Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "text.default",
      border: 0,
      cursor: "pointer"
    }}
  >
    {mode === "dark" ? <MoonFilled size={24} /> : <MoonOutline size={24} />}
  </button>
);

export default () => {
  const [mode, setMode] = useColorMode();
  const yPos = useScrollPosition();
  const scroll = yPos > 50;
  const cycleMode = () => {
    const i = modes.indexOf(mode);
    const n = (i + 1) % modes.length;
    setMode(modes[n]);
  };

  return (
    <React.Fragment>
      <div
        sx={{
          width: "100%",
          backgroundColor: scroll ? "navbar" : "background",
          boxShadow: scroll && "1px 2px 18px rgba(0,0,0,.1)",
          position: "fixed",
          height: scroll ? "60px" : "90px",
          top: 0,
          display: "flex",
          transition: theme.transition,
          alignItems: "center",
          justifyContent: "center",
          zIndex: 999
        }}
      >
        <header
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            maxWidth: "wide",
            py: 4,
            px: [3, 2, 2, 2, 0]
          }}
        >
          <Link
            to="/"
            sx={{
              variant: "styles.navlink",
              fontWeight: "bold",
              mr: 4
            }}
          >
            Sam Gamage
          </Link>
          <Link
            to="/projects"
            activeClassName="active"
            sx={{
              variant: "styles.navlink",
              fontWeight: "bold",
              mr: 3
            }}
          >
            Projects
          </Link>
          {/* <Link
            to="/blog"
            activeClassName="active"
            sx={{
              variant: "styles.navlink",
              fontWeight: "bold",
              mr: 3
            }}
          >
            Blog
          </Link> */}
          <Link
            to="/about"
            activeClassName="active"
            sx={{
              variant: "styles.navlink",
              fontWeight: "bold",
              mr: 3
            }}
          >
            About me
          </Link>
          <div sx={{ mx: "auto" }} />
          <ColorButton mode={mode} onClick={cycleMode} />
        </header>
      </div>
      <div sx={{ height: "90px" }} />
    </React.Fragment>
  );
};
