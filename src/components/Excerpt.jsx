/** @jsx jsx */
import { Box, jsx } from "theme-ui";

function Excerpt({ children, ...props }) {
  return (
    <Box
      sx={{
        ...props.sx,
        p: 3,
        mb: 4,
        mt: 3,
        borderRadius: 5,
        backgroundColor: "washed",
        color: "text.default"
      }}
    >
      {children}
    </Box>
  );
}

export default Excerpt;
