import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTES = [
  "/",
  "/about",
  "/projects",
  "/blog",
  "/contact",
  "/blog/1",
  "/blog/2",
  "/blog/3",
];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

/**
 * Waits for the preview server to be responsive
 */
async function waitForServer(url, timeout = 10000, interval = 500) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return true;
    } catch (e) {
      // server not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  throw new Error(`Preview server not ready after ${timeout}ms`);
}

async function prerender() {
  console.log("🚀 Starting Pre-rendering / SSG generation...");
  const distPath = path.join(__dirname, "dist");

  // 1. Start vite preview server as a child process
  console.log(`🖥️  Starting Vite preview server on port ${PORT}...`);
  const previewProcess = spawn("npx", ["vite", "preview", "--port", PORT], {
    stdio: "pipe",
    shell: true,
  });

  previewProcess.stdout.on("data", (data) => {
    console.log(`[preview] ${data}`);
  });
  previewProcess.stderr.on("data", (data) => {
    console.error(`[preview error] ${data}`);
  });

  // 2. Wait for server to be ready
  try {
    await waitForServer(BASE_URL);
    console.log("✅ Preview server is ready");
  } catch (err) {
    console.error("❌ Failed to start preview server:", err);
    previewProcess.kill();
    process.exit(1);
  }

  let browser;
  let page;

  try {
    // 3. Launch Puppeteer
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      console.log(`📄 Rendering ${url}...`);

      await page.goto(url, { waitUntil: "networkidle0" });

      // Optional: wait for any client-side data fetching
      await new Promise((resolve) => setTimeout(resolve, 300));

      const html = await page.content();

      // Build output path (e.g., dist/about/index.html)
      const routePath = route === "/" ? "" : route;
      const outputDir = path.join(distPath, routePath);

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const outputFile = path.join(outputDir, "index.html");
      fs.writeFileSync(outputFile, html);
      console.log(`✅ Generated: ${outputFile}`);
    }

    console.log("🎉 SSG Generation completed successfully!");
  } catch (err) {
    console.error("❌ Pre-render failed:", err);
    process.exitCode = 1;
  } finally {
    // 4. Cleanup: close Puppeteer
    if (page) await page.close().catch(() => {});
    if (browser) await browser.close().catch(() => {});

    // 5. Kill preview server
    console.log("🧹 Shutting down preview server...");
    previewProcess.kill();
    // Wait a moment for the process to exit
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  process.exit(0);
}

prerender();
