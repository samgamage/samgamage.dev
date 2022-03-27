/** @jsx jsx */
import { jsx } from "theme-ui";

const HorizontalList = ({ spaceBetween = 1, children, ...rest }) => {
  return (
    <div
      sx={{
        display: "flex",
        ">:not([hidden])~:not([hidden])": { marginLeft: spaceBetween },
        ...rest
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalList;
