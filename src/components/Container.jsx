/** @jsx jsx */
import { jsx } from "theme-ui";

export default ({ container, children, ...rest }) => (
  <div
    sx={{
      ...rest,
      variant: container ? "styles.container" : "styles.wide"
    }}
  >
    {children}
  </div>
);
