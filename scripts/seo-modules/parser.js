/**
 * SEO metadata parser — extracts SEO data from HTML, JSX, and JS files
 */
/**
 * Extract all SEO metadata from file content
 */
export function extractMetadata(content) {
  const metadata = {
    title: null,
    description: null,
    canonical: null,
    robots: null,
    ogTitle: null,
    ogDescription: null,
    ogImage: null,
    ogUrl: null,
    ogType: null,
    ogLocale: null,
    twitterCard: null,
    twitterSite: null,
    twitterCreator: null,
    twitterTitle: null,
    twitterDescription: null,
    twitterImage: null,
    jsonLd: [],
    author: null,
    language: null,
    charset: null,
    viewport: null,
    themeColor: null,
    manifest: null,
    favicon: null,
    h1Tags: [],
    headings: { h1: [], h2: [], h3: [], h4: [], h5: [], h6: [] },
    images: [],
    links: [],
    isDynamic: false,
  };

  if (!content) return metadata;

  // Detect if content has dynamic template expressions
  metadata.isDynamic = /\$\{.*?\}/.test(content) || /{.*?}/.test(content);

  // --- HTML meta tags ---
  extractHtmlMeta(content, metadata);

  // --- React Helmet / Helmet Async ---
  extractHelmetMeta(content, metadata);

  // --- document.title ---
  extractDocumentTitle(content, metadata);

  // --- JSON-LD ---
  extractJsonLd(content, metadata);

  // --- Headings ---
  extractHeadings(content, metadata);

  // --- Images ---
  extractImages(content, metadata);

  // --- Links ---
  extractLinks(content, metadata);

  // --- Custom SEO components ---
  extractCustomSeo(content, metadata);

  return metadata;
}

/**
 * Extract standard HTML <meta> tags
 */
function extractHtmlMeta(content, meta) {
  // Charset
  const charsetMatch = content.match(/<meta\s+charset=["']([^"']+)["']/i);
  if (charsetMatch) meta.charset = charsetMatch[1];

  // Viewport
  const viewportMatch = content.match(
    /<meta\s+name=["']viewport["'][^>]*content=["']([^"']+)["']/i
  );
  if (viewportMatch) meta.viewport = viewportMatch[1];

  // Title
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (titleMatch) meta.title = titleMatch[1].trim();

  // Description
  const descMatch = content.match(
    /<meta\s+name=["']description["'][^>]*content=["']([^"']+)["']/i
  );
  if (descMatch) meta.description = descMatch[1];

  // Canonical
  const canonicalMatch = content.match(
    /<link\s+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i
  );
  if (canonicalMatch) meta.canonical = canonicalMatch[1];

  // Robots
  const robotsMatch = content.match(
    /<meta\s+name=["']robots["'][^>]*content=["']([^"']+)["']/i
  );
  if (robotsMatch) meta.robots = robotsMatch[1];

  // Author
  const authorMatch = content.match(
    /<meta\s+name=["']author["'][^>]*content=["']([^"']+)["']/i
  );
  if (authorMatch) meta.author = authorMatch[1];

  // Language
  const langMatch = content.match(/<html[^>]*\blang=["']([^"']+)["']/i);
  if (langMatch) meta.language = langMatch[1];

  // Theme color
  const themeMatch = content.match(
    /<meta\s+name=["']theme-color["'][^>]*content=["']([^"']+)["']/i
  );
  if (themeMatch) meta.themeColor = themeMatch[1];

  // Manifest
  const manifestMatch = content.match(
    /<link\s+rel=["']manifest["'][^>]*href=["']([^"']+)["']/i
  );
  if (manifestMatch) meta.manifest = manifestMatch[1];

  // Favicon
  const faviconMatch = content.match(
    /<link\s+rel=["']icon["'][^>]*href=["']([^"']+)["']/i
  );
  if (faviconMatch) meta.favicon = faviconMatch[1];

  // Open Graph
  const ogPatterns = [
    { prop: "og:title", key: "ogTitle" },
    { prop: "og:description", key: "ogDescription" },
    { prop: "og:image", key: "ogImage" },
    { prop: "og:url", key: "ogUrl" },
    { prop: "og:type", key: "ogType" },
    { prop: "og:locale", key: "ogLocale" },
  ];
  for (const { prop, key } of ogPatterns) {
    const match = content.match(
      new RegExp(
        `<meta\\s+property=["']${escapeRegex(prop)}["'][^>]*content=["']([^"']+)["']`,
        "i"
      )
    );
    if (match) meta[key] = match[1];
  }

  // Twitter Card
  const twitterPatterns = [
    { name: "twitter:card", key: "twitterCard" },
    { name: "twitter:site", key: "twitterSite" },
    { name: "twitter:creator", key: "twitterCreator" },
    { name: "twitter:title", key: "twitterTitle" },
    { name: "twitter:description", key: "twitterDescription" },
    { name: "twitter:image", key: "twitterImage" },
  ];
  for (const { name, key } of twitterPatterns) {
    const match = content.match(
      new RegExp(
        `<meta\\s+name=["']${escapeRegex(name)}["'][^>]*content=["']([^"']+)["']`,
        "i"
      )
    );
    if (match) meta[key] = match[1];
  }
}

/**
 * Extract metadata from react-helmet / react-helmet-async
 */
function extractHelmetMeta(content, meta) {
  // <Helmet> blocks
  const helmetBlocks = content.match(/<Helmet[^>]*>[\s\S]*?<\/Helmet>/gi);
  if (!helmetBlocks) return;

  for (const block of helmetBlocks) {
    // Title inside Helmet
    const titleMatch = block.match(/<title>([^<]*)<\/title>/i);
    if (titleMatch && !meta.title) meta.title = titleMatch[1].trim();

    // Description
    const descMatch = block.match(
      /<meta\s+name=["']description["'][^>]*content=["']([^"']+)["']/i
    );
    if (descMatch && !meta.description) meta.description = descMatch[1];

    // OG tags
    const ogTitleMatch = block.match(
      /<meta\s+property=["']og:title["'][^>]*content=["']([^"']+)["']/i
    );
    if (ogTitleMatch && !meta.ogTitle) meta.ogTitle = ogTitleMatch[1];

    const ogDescMatch = block.match(
      /<meta\s+property=["']og:description["'][^>]*content=["']([^"']+)["']/i
    );
    if (ogDescMatch && !meta.ogDescription) meta.ogDescription = ogDescMatch[1];

    const ogImageMatch = block.match(
      /<meta\s+property=["']og:image["'][^>]*content=["']([^"']+)["']/i
    );
    if (ogImageMatch && !meta.ogImage) meta.ogImage = ogImageMatch[1];

    const ogUrlMatch = block.match(
      /<meta\s+property=["']og:url["'][^>]*content=["']([^"']+)["']/i
    );
    if (ogUrlMatch && !meta.ogUrl) meta.ogUrl = ogUrlMatch[1];

    // Canonical
    const canonicalMatch = block.match(
      /<link\s+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i
    );
    if (canonicalMatch && !meta.canonical) meta.canonical = canonicalMatch[1];

    // Twitter
    const twCardMatch = block.match(
      /<meta\s+name=["']twitter:card["'][^>]*content=["']([^"']+)["']/i
    );
    if (twCardMatch && !meta.twitterCard) meta.twitterCard = twCardMatch[1];

    const twImageMatch = block.match(
      /<meta\s+name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i
    );
    if (twImageMatch && !meta.twitterImage) meta.twitterImage = twImageMatch[1];
  }
}

/**
 * Extract document.title assignments
 */
function extractDocumentTitle(content, meta) {
  const matches = content.match(/document\.title\s*=\s*["'`]([^"'`]+)["'`]/g);
  if (matches && !meta.title) {
    const last = matches[matches.length - 1];
    const valMatch = last.match(/document\.title\s*=\s*["'`]([^"'`]+)["'`]/);
    if (valMatch) meta.title = valMatch[1];
  }
}

/**
 * Extract JSON-LD structured data
 */
function extractJsonLd(content, meta) {
  const scriptBlocks = content.match(
    /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
  );
  if (!scriptBlocks) return;

  for (const block of scriptBlocks) {
    const jsonMatch = block.match(
      /<script[^>]*>([\s\S]*?)<\/script>/i
    );
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1].trim());
        meta.jsonLd.push(parsed);
      } catch {
        // Invalid JSON-LD, skip
      }
    }
  }
}

/**
 * Extract headings (h1-h6)
 */
function extractHeadings(content, meta) {
  for (let i = 1; i <= 6; i++) {
    const pattern = new RegExp(
      `<h${i}[^>]*>([^<]*)<\\/h${i}>`,
      "gi"
    );
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const text = match[1].trim();
      if (text) {
        meta.headings[`h${i}`].push(text);
        if (i === 1) meta.h1Tags.push(text);
      }
    }
  }
}

/**
 * Extract image tags with attributes
 */
function extractImages(content, meta) {
  const imgPattern = /<img\s+[^>]*\/?>/gi;
  let match;
  while ((match = imgPattern.exec(content)) !== null) {
    const tag = match[0];
    const srcMatch = tag.match(/src=["']([^"']+)["']/);
    const altMatch = tag.match(/alt=["']([^"']*)["']/);
    const loadingMatch = tag.match(/loading=["']([^"']+)["']/);
    meta.images.push({
      src: srcMatch ? srcMatch[1] : null,
      alt: altMatch ? altMatch[1] : null,
      loading: loadingMatch ? loadingMatch[1] : null,
    });
  }
}

/**
 * Extract links (a tags)
 */
function extractLinks(content, meta) {
  const linkPattern = /<a\s+[^>]*>[\s\S]*?<\/a>/gi;
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    const tag = match[0];
    const hrefMatch = tag.match(/href=["']([^"']+)["']/);
    const relMatch = tag.match(/rel=["']([^"']+)["']/);
    const targetMatch = tag.match(/target=["']([^"']+)["']/);
    if (hrefMatch) {
      meta.links.push({
        href: hrefMatch[1],
        rel: relMatch ? relMatch[1] : null,
        target: targetMatch ? targetMatch[1] : null,
        text: tag.replace(/<[^>]*>/g, "").trim(),
      });
    }
  }
}

/**
 * Extract custom SEO component props
 */
function extractCustomSeo(content, meta) {
  // Match <Seo title="..." description="..." /> or <SEO ... />
  const seoPattern = /<[Ss][Ee][Oo]\s+([^>]*)\/?>/g;
  let match;
  while ((match = seoPattern.exec(content)) !== null) {
    const propsStr = match[1];
    const titleMatch = propsStr.match(/title=["'`]([^"'`]+)["'`]/);
    const descMatch = propsStr.match(/description=["'`]([^"'`]+)["'`]/);
    const imageMatch = propsStr.match(/(?:image|ogImage)=["'`]([^"'`]+)["'`]/);

    if (titleMatch && !meta.title) meta.title = titleMatch[1];
    if (descMatch && !meta.description) meta.description = descMatch[1];
    if (imageMatch && !meta.ogImage) meta.ogImage = imageMatch[1];
  }
}

/**
 * Escape special regex characters
 */
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}