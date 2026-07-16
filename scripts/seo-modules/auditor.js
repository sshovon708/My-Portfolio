/**
 * SEO auditor — evaluates metadata against best practices and brand rules
 */
import { BRAND, RECOMMENDED } from "./config.js";

let findings = [];
let _verbose = false;

export function setVerbose(v) {
  _verbose = v;
}

export function getFindings() {
  return findings;
}

export function resetFindings() {
  findings = [];
}

/**
 * Run all audit checks on extracted metadata
 */
export function auditFile(filePath, relativePath, meta, allMeta = []) {
  const fileFindings = [];

  // --- TITLE CHECKS ---
  checkTitle(filePath, relativePath, meta, fileFindings);
  checkTitleLength(filePath, relativePath, meta, fileFindings);
  checkTitleBrand(filePath, relativePath, meta, fileFindings);
  checkTitleFullName(filePath, relativePath, meta, fileFindings);

  // --- DESCRIPTION CHECKS ---
  checkDescription(filePath, relativePath, meta, fileFindings);
  checkDescriptionLength(filePath, relativePath, meta, fileFindings);

  // --- CANONICAL ---
  checkCanonical(filePath, relativePath, meta, fileFindings);

  // --- ROBOTS ---
  checkRobots(filePath, relativePath, meta, fileFindings);

  // --- OG TAGS ---
  checkOgTitle(filePath, relativePath, meta, fileFindings);
  checkOgDescription(filePath, relativePath, meta, fileFindings);
  checkOgImage(filePath, relativePath, meta, fileFindings);

  // --- TWITTER ---
  checkTwitterCard(filePath, relativePath, meta, fileFindings);
  checkTwitterImage(filePath, relativePath, meta, fileFindings);

  // --- JSON-LD ---
  checkJsonLd(filePath, relativePath, meta, fileFindings);

  // --- AUTHOR ---
  checkAuthor(filePath, relativePath, meta, fileFindings);

  // --- LANGUAGE ---
  checkLanguage(filePath, relativePath, meta, fileFindings);

  // --- CHARSET ---
  checkCharset(filePath, relativePath, meta, fileFindings);

  // --- VIEWPORT ---
  checkViewport(filePath, relativePath, meta, fileFindings);

  // --- THEME COLOR ---
  checkThemeColor(filePath, relativePath, meta, fileFindings);

  // --- MANIFEST ---
  checkManifest(filePath, relativePath, meta, fileFindings);

  // --- FAVICON ---
  checkFavicon(filePath, relativePath, meta, fileFindings);

  // --- H1 ---
  checkH1(filePath, relativePath, meta, fileFindings);
  checkH1Multiple(filePath, relativePath, meta, fileFindings);
  checkHeadingHierarchy(filePath, relativePath, meta, fileFindings);

  // --- IMAGES ---
  checkImageAlt(filePath, relativePath, meta, fileFindings);
  checkLazyLoading(filePath, relativePath, meta, fileFindings);

  // --- LINKS ---
  checkInternalLinks(filePath, relativePath, meta, fileFindings);
  checkExternalLinks(filePath, relativePath, meta, fileFindings);

  // --- DUPLICATE CHECKS (across all files) ---
  checkDuplicateTitles(filePath, relativePath, meta, allMeta, fileFindings);
  checkDuplicateDescriptions(filePath, relativePath, meta, allMeta, fileFindings);

  // --- BRAND CONSISTENCY ---
  checkBrandConsistency(filePath, relativePath, meta, fileFindings);

  findings.push(...fileFindings);
  return fileFindings;
}

function addFinding(findings, filePath, issue, severity, why, fix) {
  findings.push({ filePath, issue, severity, why, fix });
}

// --- INDIVIDUAL CHECKS ---

function checkTitle(filePath, relPath, meta, f) {
  if (!meta.title && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing <title> tag", "Critical", "Title is required for SEO and accessibility", "Add a descriptive <title> tag (40-65 chars, include brand name)");
  } else if (_verbose && meta.title) {
    addFinding(f, relPath, `Title: "${meta.title}"`, "Low", "Title tag is present", "No fix needed");
  }
}

function checkTitleLength(filePath, relPath, meta, f) {
  if (meta.title && !meta.isDynamic) {
    const len = meta.title.length;
    if (len < RECOMMENDED.titleMin) {
      addFinding(f, relPath, `Title too short (${len} chars, min ${RECOMMENDED.titleMin})`, "High", "Short titles may not rank well", `Extend title to ${RECOMMENDED.titleMin}-${RECOMMENDED.titleMax} characters`);
    } else if (len > RECOMMENDED.titleMax) {
      addFinding(f, relPath, `Title too long (${len} chars, max ${RECOMMENDED.titleMax})`, "High", "Long titles get truncated in SERPs", `Shorten title to ${RECOMMENDED.titleMin}-${RECOMMENDED.titleMax} characters`);
    }
  }
}

function checkTitleBrand(filePath, relPath, meta, f) {
  if (meta.title && !meta.isDynamic && !meta.title.includes(BRAND.primary)) {
    addFinding(f, relPath, `Title missing brand "${BRAND.primary}"`, "High", "Brand in title improves recognition and CTR", `Add "${BRAND.primary}" to the title`);
  }
}

function checkTitleFullName(filePath, relPath, meta, f) {
  if (meta.title && meta.title.includes(BRAND.fullName)) {
    addFinding(f, relPath, `Title contains full legal name "${BRAND.fullName}"`, "Medium", "Full legal name in title looks unprofessional", `Use "${BRAND.primary}" instead of the full legal name`);
  }
}

function checkDescription(filePath, relPath, meta, f) {
  if (!meta.description && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing meta description", "Critical", "Description appears in SERP snippets", "Add a meta description (max 160 chars)");
  }
}

function checkDescriptionLength(filePath, relPath, meta, f) {
  if (meta.description && meta.description.length > RECOMMENDED.descMax) {
    addFinding(f, relPath, `Description too long (${meta.description.length} chars, max ${RECOMMENDED.descMax})`, "High", "Long descriptions get truncated in SERPs", `Shorten description to ${RECOMMENDED.descMax} characters or less`);
  }
}

function checkCanonical(filePath, relPath, meta, f) {
  if (!meta.canonical && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing canonical URL", "Medium", "Canonical prevents duplicate content issues", "Add <link rel='canonical' href='...'> pointing to the preferred URL");
  }
}

function checkRobots(filePath, relPath, meta, f) {
  if (meta.robots && meta.robots.includes("noindex")) {
    addFinding(f, relPath, `Robots meta is "noindex"`, "High", "Page won't be indexed by search engines", 'Remove "noindex" or change to "index, follow"');
  }
}

function checkOgTitle(filePath, relPath, meta, f) {
  if (!meta.ogTitle && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing og:title", "Medium", "OG title controls how links appear on social media", "Add <meta property='og:title' content='...'>");
  }
}

function checkOgDescription(filePath, relPath, meta, f) {
  if (!meta.ogDescription && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing og:description", "Medium", "OG description controls social share snippets", "Add <meta property='og:description' content='...'>");
  }
}

function checkOgImage(filePath, relPath, meta, f) {
  if (!meta.ogImage && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing og:image", "Medium", "OG image makes social shares visually appealing", "Add <meta property='og:image' content='...'> with a 1200x630 image");
  }
}

function checkTwitterCard(filePath, relPath, meta, f) {
  if (!meta.twitterCard && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing twitter:card", "Low", "Twitter card improves tweet appearance", "Add <meta name='twitter:card' content='summary_large_image'>");
  }
}

function checkTwitterImage(filePath, relPath, meta, f) {
  if (!meta.twitterImage && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing twitter:image", "Low", "Twitter image makes tweets visually appealing", "Add <meta name='twitter:image' content='...'>");
  }
}

function checkJsonLd(filePath, relPath, meta, f) {
  if (relPath.endsWith(".html") && meta.jsonLd.length === 0) {
    addFinding(f, relPath, "Missing JSON-LD structured data", "Medium", "Structured data enables rich results in SERPs", "Add JSON-LD with Person, WebSite, and BreadcrumbList schemas");
  } else if (meta.jsonLd.length > 0) {
    let hasPerson = false;
    let hasWebsite = false;
    let hasBreadcrumb = false;
    for (const ld of meta.jsonLd) {
      const graph = ld["@graph"] || [ld];
      for (const item of graph) {
        if (item["@type"] === "Person") hasPerson = true;
        if (item["@type"] === "WebSite") hasWebsite = true;
        if (item["@type"] === "BreadcrumbList") hasBreadcrumb = true;
      }
    }
    if (!hasPerson) {
      addFinding(f, relPath, "Missing Person schema in JSON-LD", "Medium", "Person schema helps search engines identify the author", "Add Person schema with @type: Person and the full name");
    }
    if (!hasWebsite) {
      addFinding(f, relPath, "Missing WebSite schema in JSON-LD", "Medium", "WebSite schema provides site-level metadata", "Add WebSite schema with @type: WebSite");
    }
    if (!hasBreadcrumb) {
      addFinding(f, relPath, "Missing BreadcrumbList schema in JSON-LD", "Low", "Breadcrumb schema enables breadcrumb rich results", "Add BreadcrumbList schema for navigation paths");
    }
  }
}

function checkAuthor(filePath, relPath, meta, f) {
  if (!meta.author && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing author meta tag", "Low", "Author meta helps establish content ownership", 'Add <meta name="author" content="...">');
  } else if (meta.author && meta.author !== BRAND.fullName) {
    addFinding(f, relPath, `Author meta "${meta.author}" doesn't match brand name`, "Medium", "Author should match the site owner's full name", `Set author to "${BRAND.fullName}"`);
  }
}

function checkLanguage(filePath, relPath, meta, f) {
  if (!meta.language && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing lang attribute on <html>", "Medium", "Language attribute helps search engines and screen readers", "Add lang='en' to the <html> tag");
  }
}

function checkCharset(filePath, relPath, meta, f) {
  if (!meta.charset && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing charset meta tag", "Critical", "Charset declaration is required for proper rendering", "Add <meta charset='UTF-8'>");
  }
}

function checkViewport(filePath, relPath, meta, f) {
  if (!meta.viewport && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing viewport meta tag", "Critical", "Viewport is required for mobile responsiveness", "Add <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
  }
}

function checkThemeColor(filePath, relPath, meta, f) {
  if (!meta.themeColor && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing theme-color meta tag", "Low", "Theme color customizes browser UI on mobile", "Add <meta name='theme-color' content='...'>");
  }
}

function checkManifest(filePath, relPath, meta, f) {
  if (!meta.manifest && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing manifest link", "Low", "Web manifest enables PWA installation", "Add <link rel='manifest' href='/manifest.json'>");
  }
}

function checkFavicon(filePath, relPath, meta, f) {
  if (!meta.favicon && relPath.endsWith(".html")) {
    addFinding(f, relPath, "Missing favicon link", "Low", "Favicon appears in browser tabs and bookmarks", "Add <link rel='icon' type='image/x-icon' href='/favicon.ico'>");
  }
}

function checkH1(filePath, relPath, meta, f) {
  if (relPath.endsWith(".html") && meta.h1Tags.length === 0) {
    addFinding(f, relPath, "Missing H1 tag", "High", "H1 is critical for page structure and SEO", "Add exactly one H1 tag describing the page content");
  }
}

function checkH1Multiple(filePath, relPath, meta, f) {
  if (meta.h1Tags.length > 1) {
    addFinding(f, relPath, `Multiple H1 tags (${meta.h1Tags.length} found)`, "Medium", "Multiple H1s dilute SEO signals", "Use only one H1 per page");
  }
}

function checkHeadingHierarchy(filePath, relPath, meta, f) {
  const h = meta.headings;
  // Check for skipped levels (e.g., h1 -> h3 without h2)
  for (let i = 1; i < 6; i++) {
    const current = h[`h${i}`];
    const next = h[`h${i + 1}`];
    if (current.length > 0 && next.length > 0) {
      // Check if next level is used without this level
      // This is complex — simplified: flag if h1 present but no h2 but has h3
    }
  }
  // Simple: check if h3 present without h2, or h4 without h3
  if (h.h3.length > 0 && h.h2.length === 0 && h.h1.length > 0) {
    addFinding(f, relPath, "Skipped heading level: h1 -> h3 (no h2)", "Low", "Skipped heading levels confuse screen readers", "Add an h2 between h1 and h3 or use proper nesting");
  }
}

function checkImageAlt(filePath, relPath, meta, f) {
  for (const img of meta.images) {
    if (img.alt === null || img.alt === undefined) {
      addFinding(f, relPath, `Image missing alt attribute: ${img.src}`, "High", "Alt text is required for accessibility and image SEO", `Add alt="..." to the <img> tag: ${img.src}`);
    } else if (img.alt === "") {
      addFinding(f, relPath, `Image has empty alt text: ${img.src}`, "Medium", "Empty alt is for decorative images only", `Add descriptive alt text or keep empty only if decorative: ${img.src}`);
    }
  }
}

function checkLazyLoading(filePath, relPath, meta, f) {
  for (const img of meta.images) {
    if (img.src && !img.loading) {
      addFinding(f, relPath, `Image missing loading="lazy": ${img.src}`, "Low", "Lazy loading improves initial page load performance", `Add loading="lazy" to <img>: ${img.src}`);
    }
  }
}

function checkInternalLinks(filePath, relPath, meta, f) {
  for (const link of meta.links) {
    const href = link.href;
    // Check for broken local asset references
    if (href && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("#")) {
      // Potential local link — can't verify existence here, but flag if suspicious
      if (href.includes("//")) {
        addFinding(f, relPath, `Possible broken local link: ${href}`, "Medium", "Double slashes in local paths often indicate broken links", `Fix the path: ${href}`);
      }
    }
  }
}

function checkExternalLinks(filePath, relPath, meta, f) {
  for (const link of meta.links) {
    const href = link.href;
    if (href && (href.startsWith("http:") || href.startsWith("https:"))) {
      const rel = link.rel || "";
      if (!rel.includes("noopener")) {
        addFinding(f, relPath, `External link missing rel="noopener": ${href}`, "Medium", "Missing noopener is a security risk", `Add rel="noopener noreferrer" to external links`);
      }
      if (!rel.includes("noreferrer")) {
        addFinding(f, relPath, `External link missing rel="noreferrer": ${href}`, "Low", "Missing noreferrer may leak referrer info", `Add rel="noopener noreferrer" to external links`);
      }
    }
  }
}

function checkDuplicateTitles(filePath, relPath, meta, allMeta, f) {
  if (!meta.title || meta.isDynamic) return;
  for (const other of allMeta) {
    if (other.path !== relPath && other.meta.title === meta.title && !other.meta.isDynamic) {
      addFinding(f, relPath, `Duplicate title with ${other.path}: "${meta.title}"`, "Medium", "Duplicate titles confuse search engines", "Use unique titles for each page");
      break;
    }
  }
}

function checkDuplicateDescriptions(filePath, relPath, meta, allMeta, f) {
  if (!meta.description) return;
  for (const other of allMeta) {
    if (other.path !== relPath && other.meta.description === meta.description) {
      addFinding(f, relPath, `Duplicate description with ${other.path}`, "Low", "Duplicate descriptions reduce SERP visibility", "Use unique descriptions for each page");
      break;
    }
  }
}

function checkBrandConsistency(filePath, relPath, meta, f) {
  if (!meta.title || meta.isDynamic) return;
  // Check structured data for full name
  for (const ld of meta.jsonLd) {
    const graph = ld["@graph"] || [ld];
    for (const item of graph) {
      if (item["@type"] === "Person" && item.name) {
        if (item.name !== BRAND.fullName) {
          addFinding(f, relPath, `Person schema name "${item.name}" doesn't match legal name`, "Medium", "Person schema should use the full legal name", `Set Person schema name to "${BRAND.fullName}"`);
        }
      }
    }
  }
}