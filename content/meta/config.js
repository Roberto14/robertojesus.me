const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Bobby's corner is a personal software engineering blog", // <title>
  shortSiteTitle: "Bobby's corner", // <title> ending for posts and pages
  siteDescription: "Bobby's corner is all about software engineering with focus on web development and javascript nodejs environment",
  siteUrl: "https://robertojesus.me",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Roberto Jesus",
  authorTwitterAccount: "RobertoRJ",
  // info
  infoTitle: "bobby's corner",
  infoTitleNote: "randomly writing",
  // manifest.json
  manifestName: "Bobby's corner is a personal software engineering blog",
  manifestShortName: "BobbysCorner", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "bobby@robertojesus.me",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/Roberto14" },
    { name: "twitter", url: "https://twitter.com/RobertoRJ" },
    { name: "linkedin", url: "https://www.linkedin.com/in/roberto-jesus-03a65642/" }
  ],
  disqusShortname: "randomly-writing"
};
