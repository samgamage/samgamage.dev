/** @jsx jsx */
import { css } from "@emotion/core";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { jsx } from "theme-ui";

const RE = /{([\d,-]+)}/;

const wrapperStyles = css`
  width: 100%;
`;

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(",")
      .map(v => v.split("-").map(y => parseInt(y, 10)));
    return index => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      );
      return inRange;
    };
  }
  return () => false;
}

function Code({ codeString, language, metastring }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div css={wrapperStyles}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div
                key={i}
                sx={{
                  backgroundColor: shouldHighlightLine(i) ? "highlight" : "",
                  borderLeft: shouldHighlightLine(i) ? "2px solid" : "",
                  borderLeftColor: "primary",
                  pl: 2,
                  borderRadius: 2
                }}
                {...getLineProps({
                  line,
                  key: i
                })}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}

export default Code;
