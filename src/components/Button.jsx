/** @jsx jsx */
import { jsx } from "theme-ui";

function Button({ text, href, ...rest }) {
  return (
    <a
      type="button"
      tabIndex="0"
      sx={{
        paddingX: 2,
        paddingY: 1,
        backgroundColor: "muted",
        color: "gray",
        display: "inline-table",
        borderRadius: 2,
        textDecoration: "none",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "mutedHover"
        },
        ...rest
      }}
      href={href}
    >
      {text}
    </a>
  );
}

export default Button;
