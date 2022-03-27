/** @jsx jsx */
import { jsx } from "theme-ui";

export default ({ wide, children, ...rest }) => (
  <div
    sx={{
      ...rest,
      variant: wide ? "styles.wide" : "styles.container"
    }}
  >
    {children}
  </div>
);
