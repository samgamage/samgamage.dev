/** @jsx jsx */
import {jsx} from "theme-ui"

const Flex = ({children, ...props}) => {
  return (
    <div {...props} sx={{display: "flex"}}>
      {children}
    </div>
  )
}

export default Flex
