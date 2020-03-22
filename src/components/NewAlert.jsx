/** @jsx jsx */
import { jsx } from "theme-ui";

const NewAlert = () => {
  return (
    <div
      sx={{
        height: "100%",
        py: 1,
        px: 2,
        borderRadius: 5,
        backgroundColor: "primary",
        color: "text.lightGray"
      }}
    >
      New!
    </div>
  );
};

export default NewAlert;
