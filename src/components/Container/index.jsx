/** @jsx jsx */
import {jsx} from "theme-ui"

export default ({container, children}) => (
  <div
    sx={{
      mx: "auto",
      maxWidth: container ? "container" : "wide",
    }}
  >
    {children}
  </div>
)
