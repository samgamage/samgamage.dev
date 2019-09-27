/** @jsx jsx */
import React from "react"
import {jsx, Styled} from "theme-ui"
import Flex from "../components/Flex"
import Code from "./Code"

const normalizeString = string => {
  const splitString = string.split(" ").map(word => word.toLowerCase())
  return splitString.join("-")
}

function preToCodeBlock(preProps) {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props

    const matches = className.match(/language-(?<lang>.*)/)

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    }
  }
  return null
}

export default {
  wrapper: ({children}) => <React.Fragment>{children}</React.Fragment>,
  h1: ({children, ...restProps}) => (
    <Flex>
      <Styled.a
        href={`#${normalizeString(children)}`}
        className="title-anchor"
        sx={{
          transition: "all 0.1s ease",
          variant: "styles.h1",
          textDecoration: "none",
          position: "relative",
          fontWeight: "normal",
          mr: 2,
        }}
      >
        #
      </Styled.a>
      <Styled.h1 id={normalizeString(children)} {...restProps} />
    </Flex>
  ),
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    }
    return <pre {...preProps} />
  },
}
