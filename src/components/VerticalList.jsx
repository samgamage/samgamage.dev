/** @jsx jsx */
import { jsx } from "theme-ui";

const VerticalList = ({ spaceBetween = 1, children }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        "> *": { marginBottom: spaceBetween }
      }}
    >
      {children}
    </div>
  );
};

export default VerticalList;
