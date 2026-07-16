/**
 * SEO scoring engine
 */
const SEVERITY_WEIGHTS = {
  Critical: 10,
  High: 5,
  Medium: 3,
  Low: 1,
};

const MAX_SCORE = 100;

/**
 * Calculate SEO scores from findings
 */
export function calculateScores(findings) {
  const bySeverity = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  const byCategory = {
    technical: [],
    onpage: [],
    metadata: [],
    accessibility: [],
    brand: [],
  };

  for (const f of findings) {
    bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;
    categorizeFinding(f, byCategory);
  }

  const totalDeductions = calculateDeductions(bySeverity);
  const overallScore = Math.max(0, MAX_SCORE - totalDeductions);

  const technicalScore = calculateCategoryScore(byCategory.technical);
  const onpageScore = calculateCategoryScore(byCategory.onpage);
  const metadataScore = calculateCategoryScore(byCategory.metadata);
  const accessibilityScore = calculateCategoryScore(byCategory.accessibility);
  const brandScore = calculateCategoryScore(byCategory.brand);

  return {
    overall: overallScore,
    technical: technicalScore,
    onpage: onpageScore,
    metadata: metadataScore,
    accessibility: accessibilityScore,
    brand: brandScore,
    deductions: {
      critical: bySeverity.Critical,
      high: bySeverity.High,
      medium: bySeverity.Medium,
      low: bySeverity.Low,
    },
  };
}

function calculateDeductions(bySeverity) {
  return (
    (bySeverity.Critical || 0) * SEVERITY_WEIGHTS.Critical +
    (bySeverity.High || 0) * SEVERITY_WEIGHTS.High +
    (bySeverity.Medium || 0) * SEVERITY_WEIGHTS.Medium +
    (bySeverity.Low || 0) * SEVERITY_WEIGHTS.Low
  );
}

function calculateCategoryScore(findings) {
  if (findings.length === 0) return 100;
  let deductions = 0;
  for (const f of findings) {
    deductions += SEVERITY_WEIGHTS[f.severity] || 1;
  }
  return Math.max(0, MAX_SCORE - deductions);
}

function categorizeFinding(finding, byCategory) {
  const issue = finding.issue.toLowerCase();

  // Technical SEO
  if (
    issue.includes("canonical") ||
    issue.includes("robots") ||
    issue.includes("sitemap") ||
    issue.includes("charset") ||
    issue.includes("viewport") ||
    issue.includes("language") ||
    issue.includes("manifest") ||
    issue.includes("favicon") ||
    issue.includes("theme-color")
  ) {
    byCategory.technical.push(finding);
  }
  // On-page SEO
  else if (
    issue.includes("h1") ||
    issue.includes("heading") ||
    issue.includes("link") ||
    issue.includes("alt") ||
    issue.includes("broken") ||
    issue.includes("duplicate title") ||
    issue.includes("duplicate description")
  ) {
    byCategory.onpage.push(finding);
  }
  // Metadata quality
  else if (
    issue.includes("title") ||
    issue.includes("description") ||
    issue.includes("og:") ||
    issue.includes("twitter:") ||
    issue.includes("json-ld") ||
    issue.includes("structured data") ||
    issue.includes("schema")
  ) {
    byCategory.metadata.push(finding);
  }
  // Accessibility
  else if (
    issue.includes("alt") ||
    issue.includes("heading") ||
    issue.includes("lang") ||
    issue.includes("skip")
  ) {
    byCategory.accessibility.push(finding);
  }
  // Brand consistency
  else if (
    issue.includes("brand") ||
    issue.includes("full name") ||
    issue.includes("legal name") ||
    issue.includes("logo") ||
    issue.includes("author")
  ) {
    byCategory.brand.push(finding);
  }
}