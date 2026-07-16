/**
 * SEO audit reporter — generates colorized terminal output and JSON
 */

const COLORS = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
};

const SEVERITY_COLORS = {
  Critical: COLORS.bgRed + COLORS.white,
  High: COLORS.red,
  Medium: COLORS.yellow,
  Low: COLORS.dim,
};

const SEVERITY_ICONS = {
  Critical: "✖",
  High: "⚠",
  Medium: "⚡",
  Low: "ℹ",
};

/**
 * Generate a colorized terminal report
 */
export function generateReport(findings, scores, options = {}) {
  const { verbose = false, json = false } = options;
  const lines = [];

  if (json) {
    return JSON.stringify({ findings, scores, timestamp: new Date().toISOString() }, null, 2);
  }

  // Header
  lines.push("");
  lines.push(`${COLORS.bold}${COLORS.cyan}╔══════════════════════════════════════════════════════════╗${COLORS.reset}`);
  lines.push(`${COLORS.bold}${COLORS.cyan}║           SEO AUDIT REPORT — IAShovon Portfolio            ║${COLORS.reset}`);
  lines.push(`${COLORS.bold}${COLORS.cyan}╚══════════════════════════════════════════════════════════╝${COLORS.reset}`);
  lines.push("");

  // Scores
  lines.push(`${COLORS.bold}${COLORS.magenta}📊 SCORES${COLORS.reset}`);
  lines.push(`${COLORS.dim}────────────────────────────────────────────────────────${COLORS.reset}`);
  lines.push(`  ${COLORS.bold}Overall SEO:${COLORS.reset}       ${formatScore(scores.overall)}`);
  lines.push(`  Technical SEO:      ${formatScore(scores.technical)}`);
  lines.push(`  On-Page SEO:        ${formatScore(scores.onpage)}`);
  lines.push(`  Metadata Quality:   ${formatScore(scores.metadata)}`);
  lines.push(`  Accessibility SEO:  ${formatScore(scores.accessibility)}`);
  lines.push(`  Brand Consistency:  ${formatScore(scores.brand)}`);
  lines.push("");
  lines.push(`  ${COLORS.dim}Deductions: ${scores.deductions.critical} critical, ${scores.deductions.high} high, ${scores.deductions.medium} medium, ${scores.deductions.low} low${COLORS.reset}`);
  lines.push("");

  // Findings grouped by severity
  const severityOrder = ["Critical", "High", "Medium", "Low"];
  let hasFindings = false;

  for (const severity of severityOrder) {
    const sevFindings = findings.filter((f) => f.severity === severity);
    if (sevFindings.length === 0 && !verbose) continue;
    if (sevFindings.length === 0 && verbose) {
      lines.push(`${COLORS.green}✔ No ${severity.toLowerCase()} issues${COLORS.reset}`);
      continue;
    }

    hasFindings = true;
    const color = SEVERITY_COLORS[severity] || COLORS.white;
    const icon = SEVERITY_ICONS[severity] || "•";
    lines.push(`${color}${COLORS.bold}${icon} ${severity.toUpperCase()} (${sevFindings.length})${COLORS.reset}`);
    lines.push(`${COLORS.dim}────────────────────────────────────────────────────────${COLORS.reset}`);

    for (const f of sevFindings) {
      lines.push(`  ${COLORS.bold}File:${COLORS.reset} ${f.filePath}`);
      lines.push(`  ${COLORS.bold}Issue:${COLORS.reset} ${f.issue}`);
      lines.push(`  ${COLORS.dim}  Why: ${f.why}${COLORS.reset}`);
      lines.push(`  ${COLORS.dim}  Fix:  ${f.fix}${COLORS.reset}`);
      lines.push("");
    }
  }

  if (!hasFindings) {
    lines.push(`${COLORS.green}${COLORS.bold}✔ All checks passed! No issues found.${COLORS.reset}`);
  }

  // Summary
  lines.push(`${COLORS.bold}${COLORS.cyan}══════════════════════════════════════════════════════════${COLORS.reset}`);
  const totalIssues = findings.length;
  if (totalIssues === 0) {
    lines.push(`${COLORS.bgGreen}${COLORS.bold} PASSED: All SEO checks passed! ${COLORS.reset}`);
  } else {
    const critical = findings.filter((f) => f.severity === "Critical").length;
    const high = findings.filter((f) => f.severity === "High").length;
    if (critical > 0 || high > 0) {
      lines.push(`${COLORS.bgRed}${COLORS.bold} FAILED: ${totalIssues} issue(s) found (${critical} critical, ${high} high) ${COLORS.reset}`);
    } else {
      lines.push(`${COLORS.bgYellow}${COLORS.bold} WARNING: ${totalIssues} issue(s) found (all low/medium) ${COLORS.reset}`);
    }
  }
  lines.push(`${COLORS.bold}${COLORS.cyan}══════════════════════════════════════════════════════════${COLORS.reset}`);
  lines.push("");

  return lines.join("\n");
}

function formatScore(score) {
  if (score >= 90) return `${COLORS.green}${score}/100 ✔${COLORS.reset}`;
  if (score >= 70) return `${COLORS.yellow}${score}/100 ⚠${COLORS.reset}`;
  return `${COLORS.red}${score}/100 ✖${COLORS.reset}`;
}

/**
 * Check if there are critical issues
 */
export function hasCriticalIssues(findings) {
  return findings.some((f) => f.severity === "Critical" || f.severity === "High");
}