/** @jsx jsx */
import { jsx } from "theme-ui";

const VerticalList = ({ spaceBetween = 2, children, ...rest }) => {
  return (
    <div
      sx={{
        ...rest,
        display: "flex",
        flexDirection: "column",
        my: 3,
        ">:not([hidden])~:not([hidden])": { marginTop: spaceBetween }
      }}
    >
      {children}
    </div>
  );
};

export default VerticalList;
