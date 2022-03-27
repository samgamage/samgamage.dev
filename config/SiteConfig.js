const config = {
  siteTitle: "samgamage.dev", // Site title.
  siteTitleShort: "Sam Gamage", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Samuel Gamage", // Alternative site title for SEO.
  siteLogo: "/assets/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://samgamage.dev", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Samuel Gamage is a talented software developer and a student at the Georgia Institute of Technology.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/blog/rss.xml", // Path to the RSS file.
  googleAnalyticsID: "UA-140847972-1", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userTwitter: "https://twitter.com/samgamage24", // Optionally renders "Follow Me" in the UserInfo segment.
  userEmail: "sgamage3@gatech.edu",
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
