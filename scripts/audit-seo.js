#!/usr/bin/env node
/**
 * Production-quality SEO Audit Tool for React + Vite projects
 *
 * Usage:
 *   node scripts/audit-seo.js                # Standard audit
 *   node scripts/audit-seo.js --verbose       # Verbose mode (show passes too)
 *   node scripts/audit-seo.js --json          # JSON output
 *   node scripts/audit-seo.js --fix           # Auto-fix safe issues (experimental)
 */
import { resolve } from "node:path";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { scanDirectory, readFileContent, classifyFile } from "./seo-modules/scanner.js";
import { extractMetadata } from "./seo-modules/parser.js";
import { auditFile, resetFindings, getFindings, setVerbose } from "./seo-modules/auditor.js";
import { calculateScores } from "./seo-modules/scorer.js";
import { generateReport, hasCriticalIssues } from "./seo-modules/reporter.js";
import { BRAND } from "./seo-modules/config.js";

// Parse CLI arguments
const args = process.argv.slice(2);
const options = {
  verbose: args.includes("--verbose") || args.includes("-v"),
  json: args.includes("--json") || args.includes("-j"),
  fix: args.includes("--fix") || args.includes("-f"),
};

if (options.verbose) {
  setVerbose(true);
}

async function main() {
  const projectRoot = process.cwd();
  console.error(`🔍 Scanning project: ${projectRoot}\n`);

  // Step 1: Recursively scan for all relevant files
  const files = await scanDirectory(projectRoot);

  if (files.length === 0) {
    console.error("❌ No relevant files found. Are you in a React + Vite project?");
    process.exit(1);
  }

  console.error(`📄 Found ${files.length} relevant files to audit\n`);

  // Step 2: Check infrastructure files (robots.txt, sitemap.xml)
  const infraChecks = checkInfrastructure(projectRoot);

  // Step 3: Extract metadata from each file
  const allMeta = [];
  const fileResults = [];

  for (const file of files) {
    const content = readFileContent(file);
    if (!content) continue;

    const relativePath = file.replace(projectRoot + "/", "").replace(/\\/g, "/");
    const meta = extractMetadata(content);
    const fileType = classifyFile(file);

    allMeta.push({ path: relativePath, meta, fileType, content });
    fileResults.push({ path: relativePath, meta, fileType });
  }

  // Step 4: Audit each file
  resetFindings();

  // First pass: collect all metadata for duplicate detection
  for (const result of fileResults) {
    auditFile(result.path, result.path, result.meta, allMeta);
  }

  // Step 5: Add infrastructure findings
  const allFindings = [...getFindings(), ...infraChecks];

  // Step 6: Calculate scores
  const scores = calculateScores(allFindings);

  // Step 7: Generate report
  const report = generateReport(allFindings, scores, options);

  if (options.json) {
    console.log(report);
  } else {
    console.log(report);
  }

  // Step 8: Auto-fix (experimental)
  if (options.fix) {
    const fixed = autoFix(allFindings);
    if (fixed > 0) {
      console.log(`\n🔧 Auto-fixed ${fixed} issue(s). Review changes before committing.`);
    }
  }

  // Step 9: Exit with appropriate code
  if (hasCriticalIssues(allFindings)) {
    process.exit(1);
  }
  process.exit(0);
}

/**
 * Check infrastructure SEO files
 */
function checkInfrastructure(projectRoot) {
  const findings = [];
  const checks = [
    { file: "public/robots.txt", label: "robots.txt", critical: false },
    { file: "public/sitemap.xml", label: "sitemap.xml", critical: false },
    { file: "public/_redirects", label: "_redirects (Netlify)", critical: false },
    { file: "public/manifest.json", label: "Web manifest (manifest.json)", critical: false },
  ];

  for (const check of checks) {
    const fullPath = resolve(projectRoot, check.file);
    if (!existsSync(fullPath)) {
      findings.push({
        filePath: check.file,
        issue: `Missing ${check.label}`,
        severity: check.critical ? "Critical" : "High",
        why: `${check.label} is required for proper SEO and site configuration`,
        fix: `Create ${check.file} with appropriate content`,
      });
    } else if (check.label === "robots.txt") {
      const content = readFileSync(fullPath, "utf-8");
      if (!content.includes("Sitemap:")) {
        findings.push({
          filePath: check.file,
          issue: "robots.txt missing Sitemap reference",
          severity: "Medium",
          why: "Sitemap reference helps search engines discover all pages",
          fix: `Add 'Sitemap: ${BRAND.siteUrl}/sitemap.xml' to robots.txt`,
        });
      }
    } else if (check.label === "sitemap.xml") {
      const content = readFileSync(fullPath, "utf-8");
      if (!content.includes("<urlset")) {
        findings.push({
          filePath: check.file,
          issue: "sitemap.xml appears malformed",
          severity: "High",
          why: "Search engines use sitemap.xml to discover pages",
          fix: "Ensure sitemap.xml has valid <urlset> with <url> entries",
        });
      }
    }
  }

  return findings;
}

/**
 * Auto-fix some safe issues (experimental)
 */
function autoFix(findings) {
  let fixed = 0;

  for (const finding of findings) {
    // Only auto-fix Medium/Low issues with clear fixes
    if (finding.severity === "Critical" || finding.severity === "High") continue;

    // Find the file content
    const filePath = resolve(process.cwd(), finding.filePath);
    if (!existsSync(filePath)) continue;

    let content = readFileSync(filePath, "utf-8");

    // Fix: add loading="lazy" to images
    if (finding.issue.includes('loading="lazy"')) {
      const imgSrc = finding.issue.match(/:\s*(\S+)$/);
      if (imgSrc) {
        const newContent = content.replace(
          new RegExp(`(<img[^>]*src=["']${escapeRegex(imgSrc[1])}["'][^>]*)>`),
          '$1 loading="lazy">'
        );
        if (newContent !== content) {
          writeFileSync(filePath, newContent);
          fixed++;
        }
      }
    }
  }

  return fixed;
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

main().catch((err) => {
  console.error("❌ Audit failed:", err.message);
  process.exit(1);
});