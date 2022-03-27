/** @jsx jsx */
import { css } from "@emotion/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import { jsx, useColorMode } from "theme-ui";

const regExpLineNumber = /{([\d, -]+)}/;

const regExpFileName = /([a-z]+)\.[0-9a-z]{1,5}$/i;

const wrapperStyles = css`
  width: 100%;
`;

function calculateLinesToHighlight(meta) {
  if (regExpLineNumber.test(meta)) {
    const lineNumbers = regExpLineNumber
      .exec(meta)[1]
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

function getFileName(meta) {
  if (regExpFileName.test(meta)) {
    const fileName = regExpFileName.exec(meta)[0];
    return fileName;
  }
  return null;
}

function Code({ codeString, language, metastring }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const fileName = getFileName(metastring);
  const [mode, setMode] = useColorMode();

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div css={wrapperStyles}>
          {fileName && (
            <div
              sx={{
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                backgroundColor: "black",
                p: [1, 2]
              }}
            >
              <span
                sx={{
                  color: "text.gray"
                }}
              >
                {fileName}
              </span>
            </div>
          )}
          <pre
            sx={{
              variant: "styles.pre",
              mt: fileName ? 0 : 3,
              borderTopLeftRadius: fileName ? 0 : 5,
              borderTopRightRadius: fileName ? 0 : 5
            }}
            className={className}
          >
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
