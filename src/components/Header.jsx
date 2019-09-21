/** @jsx jsx */
import {Link} from "gatsby"
import {FaMoon as MoonFilled, FaRegMoon as MoonOutline} from "react-icons/fa"
import {jsx, Styled, useColorMode} from "theme-ui"
import theme from "../../config/theme"

const modes = ["light", ...Object.keys(theme.colors.modes)]

const ColorButton = ({mode, ...props}) => (
  <button
    {...props}
    title="Toggle Dark Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "text",
      border: 0,
      cursor: "pointer",
    }}
  >
    {mode === "dark" ? <MoonFilled size={24} /> : <MoonOutline size={24} />}
  </button>
)

export default () => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }

  return (
    <header
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        maxWidth: "wide",
        mx: "auto",
        py: 4,
        px: [3, 2, 2, 2, 0],
      }}
    >
      <Styled.a
        as={Link}
        to="/"
        sx={{
          variant: "styles.navlink",
          fontWeight: "bold",
          mr: 3,
        }}
      >
        Sam Gamage
      </Styled.a>
      <Styled.a
        as={Link}
        to="/blog"
        activeClassName="active"
        sx={{
          variant: "styles.navlink",
          fontWeight: "bold",
          mr: 3,
        }}
      >
        Blog
      </Styled.a>
      <div sx={{mx: "auto"}} />
      <ColorButton mode={mode} onClick={cycleMode} />
    </header>
  )
}
