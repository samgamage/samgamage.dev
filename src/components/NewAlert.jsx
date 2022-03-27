/** @jsx jsx */
import { jsx } from "theme-ui";

function NewAlert() {
  return (
    <div
      sx={{
        height: "100%",
        py: 1,
        px: 2,
        borderRadius: 5,
        backgroundColor: "primary",
        color: "white"
      }}
    >
      New!
    </div>
  );
}

export default NewAlert;
