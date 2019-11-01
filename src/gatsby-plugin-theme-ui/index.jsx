import prism from "@theme-ui/prism/presets/theme-ui"

const transition = "all 0.2s ease"

export default {
  initialColorMode: "light",
  colors: {
    text: {
      lead: "#111",
      default: "#404040",
    },
    background: "#fff",
    primary: "#5183f5",
    secondary: "#2161f2",
    highlight: "rgba(81, 131, 245, 0.3)",
    muted: "#f9f9fc",
    gray: "#555",
    modes: {
      dark: {
        text: {
          lead: "#cecece",
          default: "#b3b9c5",
        },
        background: "#202020",
        primary: "#5183f5",
        secondary: "#2161f2",
        muted: "hsl(180, 5%, 5%)",
        gray: "hsl(180, 0%, 70%)",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  sizes: {
    container: 800,
    wide: 800,
  },
  type: {
    heading: {
      fontWeight: "heading",
      lineHeight: "heading",
      mt: 4,
      mb: 3,
    },
    small: {
      fontWeight: "bold",
      fontSize: 0,
    },
  },
  prism,
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontSize: 2,
      color: "text.default",
      backgroundColor: "background",
      transition,
    },
    p: {
      color: "text.default",
    },
    a: {
      color: "text.default",
      ":hover,:focus": {
        color: "secondary",
      },
    },
    h1: {
      variant: "type.heading",
      fontSize: [5, 6],
      color: "text.lead",
    },
    h2: {
      variant: "type.heading",
      fontSize: [4, 5],
      color: "text.lead",
    },
    h3: {
      variant: "type.heading",
      fontSize: 4,
      color: "text.lead",
    },
    h4: {
      variant: "type.heading",
      fontSize: 2,
      color: "text.lead",
    },
    h5: {
      variant: "type.heading",
      fontSize: 1,
      color: "text.lead",
    },
    h6: {
      variant: "type.heading",
      fontSize: 0,
      color: "text.lead",
    },
    img: {
      maxWidth: "100%",
      height: "auto",
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      bg: "muted",
      p: 3,
      borderRadius: 8,
      overflowX: "auto",
      variant: "prism",
    },
    code: {
      fontFamily: "monospace",
      color: "primary",
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "primary",
    },
    hr: {
      border: 0,
      my: 4,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    table: {
      width: "100%",
      tableLayout: "fixed",
      borderCollapse: "collapse",
      borderSpacing: 0,
      "td+td": {
        width: "auto",
      },
      p: {
        margin: 1,
      },
    },
    tr: {
      width: "100%",
    },
    th: {
      textAlign: "left",
      py: 2,
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      py: 2,
      borderBottom: "1px solid",
      borderColor: "text.default",
    },
    blockquote: {
      fontWeight: "bold",
      fontSize: 3,
      mx: 0,
      px: 3,
      my: 5,
      borderLeft: "4px solid",
    },
    navlink: {
      alignItems: "center",
      color: "text.default",
      textDecoration: "none",
    },
    navitem: {
      display: "inline-flex",
      alignItems: "center",
      fontWeight: "bold",
      color: "text.default",
      mr: 3,
    },
    container: {
      mx: "auto",
      px: [3, 2, 2, 2, 0],
      width: "100%",
      maxWidth: "container",
    },
    wide: {
      mx: "auto",
      px: [3, 2, 2, 2, 0],
      width: "100%",
      maxWidth: "wide",
    },
    excerpt: {
      backgroundColor: "gray",
      px: 3,
    },
  },
}
