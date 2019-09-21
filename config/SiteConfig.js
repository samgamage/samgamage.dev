const config = {
  siteTitle: "samgamage.dev", // Site title.
  siteTitleShort: "Sam Gamage", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Samuel Gamage", // Alternative site title for SEO.
  siteLogo: "/images/logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://samgamage.dev", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "Samuel Gamage is an Atlanta-based web developer who specializes in React.js. Samuel has experience with almost all types of web development and is on the path to achieve the title of full stack developer in the coming years.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-140847972-1", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userTwitter: "https://twitter.com/sambgamage", // Optionally renders "Follow Me" in the UserInfo segment.
  copyright: "Copyright © 2019. Samuel Gamage", // Copyright string for the footer of the website and RSS feed.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`

module.exports = config
