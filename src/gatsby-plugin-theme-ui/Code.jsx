/** @jsx jsx */
import {css} from "@emotion/core"
import Highlight, {defaultProps} from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwl"
import {jsx} from "theme-ui"

const RE = /{([\d,-]+)}/

const wrapperStyles = css`
  width: 100%;
`

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      )
      return inRange
    }
  } else {
    return () => false
  }
}

function Code({codeString, language, metastring}) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div css={wrapperStyles}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div
                key={i}
                sx={{
                  backgroundColor: shouldHighlightLine(i) ? "highlight" : "",
                  borderLeft: shouldHighlightLine(i) ? "2px solid" : "",
                  borderLeftColor: "primary",
                }}
                {...getLineProps({
                  line,
                  key: i,
                })}
              >
                <span
                  css={css`
                    display: inline-block;
                    width: 2em;
                    user-select: none;
                    opacity: 0.3;
                    margin-right: 4px;
                    text-align: center;
                  `}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
