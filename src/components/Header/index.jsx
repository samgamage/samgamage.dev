/** @jsx jsx */
import {Link} from "gatsby"
import {jsx, Styled, useColorMode} from "theme-ui"

const modes = ["light", "black", "dark", "deep", "hack"]

const ColorButton = ({mode, ...props}) => (
  <button
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: "inline-block",
      appearance: "none",
      bg: "transparent",
      color: "text",
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ":hover,:focus": {
        color: "primary",
        boxShadow: "0 0 0 3px",
        outline: "none",
      },
    }}
  >
    toggle
  </button>
)

export default () => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    console.log(modes.length)
    console.log(n)
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
        px: 3,
        py: 4,
      }}
    >
      <Styled.a
        as={Link}
        to="/"
        sx={{
          variant: "styles.navlink",
          mr: 3,
        }}
      >
        Sam Gamage
      </Styled.a>
      <Styled.a
        as={Link}
        to="/blog"
        sx={{
          variant: "styles.navlink",
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
