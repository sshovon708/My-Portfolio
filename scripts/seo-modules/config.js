/**
 * SEO Audit configuration
 */
export const BRAND = {
  primary: "IAShovon",
  fullName: "Iftakhar Ahmmed Shovon",
  domain: "iashovon.netlify.app",
  siteUrl: "https://iashovon.netlify.app",
};

export const IGNORE_PATTERNS = [
  /node_modules/,
  /dist/,
  /build/,
  /\.git/,
  /package-lock\.json$/,
  /\.(png|jpg|jpeg|gif|ico|webp|svg|woff2?|ttf|otf|eot|map)$/i,
  /\.(mp4|webm|pdf|zip|tar|gz)$/i,
];

export const SEO_FILE_PATTERNS = [
  /\.html$/,
  /\.jsx$/,
  /\.tsx$/,
  /\.js$/,
  /\.ts$/,
];

export const PAGE_ROUTES = [
  "/",
  "/about",
  "/projects",
  "/blog",
  "/contact",
  "/thank-you",
];

export const RECOMMENDED = {
  titleMin: 40,
  titleMax: 65,
  descMax: 160,
  ogImageWidth: 1200,
  ogImageHeight: 630,
};