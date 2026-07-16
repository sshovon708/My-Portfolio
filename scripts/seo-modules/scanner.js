/**
 * Recursive file scanner for SEO audit
 */
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { readFileSync } from "node:fs";
import { IGNORE_PATTERNS, SEO_FILE_PATTERNS } from "./config.js";

/**
 * Recursively scan a directory for SEO-relevant files
 * @param {string} dir - Directory to scan
 * @param {string[]} fileList - Accumulated file list
 * @returns {Promise<string[]>} - List of file paths
 */
export async function scanDirectory(dir, fileList = []) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      // Skip ignored patterns
      if (IGNORE_PATTERNS.some((p) => p.test(fullPath))) continue;
      
      if (entry.isDirectory()) {
        await scanDirectory(fullPath, fileList);
      } else if (entry.isFile()) {
        // Only include SEO-relevant files
        if (SEO_FILE_PATTERNS.some((p) => p.test(entry.name))) {
          fileList.push(fullPath);
        }
      }
    }
  } catch {
    // Silently skip directories we can't read
  }
  
  return fileList;
}

/**
 * Classify a file by its role in the project
 */
export function classifyFile(filePath) {
  const name = filePath.toLowerCase();
  if (name.endsWith(".html")) return "html";
  if (name.includes("components/")) return "component";
  if (name.includes("layouts/")) return "layout";
  if (name.includes("pages/")) return "page";
  if (name.includes("data/")) return "data";
  if (name.includes("utils/") || name.includes("helpers/")) return "utility";
  if (name.includes("seo")) return "seo-utility";
  return "other";
}

/**
 * Read file contents (cached)
 */
const fileCache = new Map();

export function readFileContent(filePath) {
  if (fileCache.has(filePath)) return fileCache.get(filePath);
  try {
    const content = readFileSync(filePath, "utf-8");
    fileCache.set(filePath, content);
    return content;
  } catch {
    return null;
  }
}

export function clearCache() {
  fileCache.clear();
}