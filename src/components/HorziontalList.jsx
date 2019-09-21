/** @jsx jsx */
import {jsx} from "theme-ui"

const HorizontalList = ({spaceBetween = 1, children}) => {
  return (
    <div sx={{display: "flex", "> *": {marginRight: spaceBetween}}}>
      {children}
    </div>
  )
}

export default HorizontalList
