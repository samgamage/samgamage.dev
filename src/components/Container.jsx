/** @jsx jsx */
import {jsx} from "theme-ui"

export default ({container, children, ...props}) => (
  <div
    {...props}
    sx={{
      variant: container ? "styles.container" : "styles.wide",
    }}
  >
    {children}
  </div>
)
