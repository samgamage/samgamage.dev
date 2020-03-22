/** @jsx jsx */
import { jsx } from "theme-ui";

const HorizontalList = ({ spaceBetween = 1, children, ...rest }) => {
  return (
    <div
      sx={{ display: "flex", "> *": { marginRight: spaceBetween }, ...rest }}
    >
      {children}
    </div>
  );
};

export default HorizontalList;
