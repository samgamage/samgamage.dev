/** @jsx jsx */
import ReactYouTube from "react-youtube";
import { jsx } from "theme-ui";

const YouTube = props => {
  return (
    <div sx={{ mt: 2, mb: 2 }}>
      <ReactYouTube {...props} />
    </div>
  );
};

export default YouTube;
