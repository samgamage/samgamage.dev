import prism from "@theme-ui/prism/presets/theme-ui";

const transition = "all 0.2s ease";

export default {
  initialColorMode: "light",
  colors: {
    text: {
      lead: "#111",
      default: "#404040",
      gray: "#b3b9c5",
      lightGray: "#f9f9fc"
    },
    background: "#fff",
    navbar: "#fff",
    primary: "#5183f5",
    highlight: "rgba(81, 131, 245, 0.3)",
    code: "#333",
    washed: "rgba(0,0,0,.06)",
    muted: "#ededed",
    mutedHover: "#dbdbdb",
    gray: "#555",
    modes: {
      dark: {
        text: {
          lead: "#cecece",
          default: "#b3b9c5"
        },
        background: "#202020",
        muted: "hsl(180, 5%, 5%)",
        mutedHover: "hsl(180, 5%, 8%)",
        gray: "hsl(180, 0%, 70%)",
        washed: "hsla(0,0%,100%,.1)",
        navbar: "hsl(180, 5%, 5%)",
        code: "#3a3a3a"
      }
    }
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 800,
    wide: 800
  },
  transition,
  type: {
    heading: {
      fontWeight: "heading",
      lineHeight: "heading",
      mt: 4,
      mb: 3
    },
    small: {
      fontWeight: "bold",
      fontSize: 0
    }
  },
  prism,
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: 2,
      color: "text.default",
      backgroundColor: "background",
      transition
    },
    p: {
      color: "text.default",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary",
      ":hover,:focus": {
        color: "primary"
      }
    },
    h1: {
      color: "text.lead",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [5, 6]
    },
    h2: {
      color: "text.lead",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4, 5]
    },
    h3: {
      color: "text.lead",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [3, 4]
    },
    h4: {
      color: "text.lead",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [2, 3]
    },
    h5: {
      fontSize: [1, 2],
      color: "text.lead",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    h6: {
      color: "text.lead",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [0, 1]
    },
    img: {
      maxWidth: "100%",
      height: "auto"
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      backgroundColor: "code",
      borderRadius: 5,
      overflowX: "auto",
      mt: 3,
      mb: 3,
      p: 2,
      variant: "prism"
    },
    code: {
      fontFamily: "monospace",
      color: "primary"
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "text.default",
      backgroundColor: "washed",
      p: 1,
      borderRadius: 5,
      fontSize: 1
    },
    hr: {
      border: 0,
      my: 4,
      borderBottom: "1px solid",
      borderColor: "muted"
    },
    table: {
      width: "100%",
      tableLayout: "fixed",
      borderCollapse: "collapse",
      borderSpacing: 0,
      "td+td": {
        width: "auto"
      },
      p: {
        margin: 1
      }
    },
    tr: {
      width: "100%"
    },
    th: {
      textAlign: "left",
      py: 2,
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      py: 2,
      borderBottom: "1px solid",
      borderColor: "text.default"
    },
    blockquote: {
      fontWeight: "bold",
      fontSize: 3,
      mx: 0,
      px: 3,
      my: 5,
      borderLeft: "4px solid"
    },
    navlink: {
      alignItems: "center",
      color: "text.default",
      textDecoration: "none"
    },
    navitem: {
      display: "inline-flex",
      alignItems: "center",
      fontWeight: "bold",
      color: "text.default",
      fontSize: 1,
      mr: 3
    },
    container: {
      mx: "auto",
      px: [3, 2, 2, 2, 0],
      width: "100%",
      maxWidth: "container"
    },
    wide: {
      mx: "auto",
      px: [3, 2, 2, 2, 0],
      width: "100%",
      maxWidth: "wide"
    }
  }
};
