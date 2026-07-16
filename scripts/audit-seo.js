import fs from "fs";

const files = {
  "index.html": fs.readFileSync("index.html", "utf8"),
  "Home.jsx (src/pages)": fs.readFileSync("src/pages/Home.jsx", "utf8"),
  "About.jsx (src/pages)": fs.readFileSync("src/pages/About.jsx", "utf8"),
  "Projects.jsx (src/pages)": fs.readFileSync("src/pages/Projects.jsx", "utf8"),
  "Blog.jsx (src/pages)": fs.readFileSync("src/pages/Blog.jsx", "utf8"),
  "Contact.jsx (src/pages)": fs.readFileSync("src/pages/Contact.jsx", "utf8"),
  "ThankYou.jsx (src/pages)": fs.readFileSync("src/pages/ThankYou.jsx", "utf8"),
  "BlogPost.jsx (src/pages)": fs.readFileSync("src/pages/BlogPost.jsx", "utf8"),
};

console.log("=== TITLE & DESCRIPTION AUDIT ===\n");

let allPass = true;

Object.entries(files).forEach(([file, content]) => {
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const descMatch = content.match(/name="description"[^>]*content="([^"]+)"/);
  const ogTitleMatch = content.match(/property="og:title"[^>]*content="([^"]+)"/);

  console.log("---", file, "---");

  if (titleMatch) {
    const title = titleMatch[1];
    const isDynamic = title.includes("${");

    if (!isDynamic) {
      const lenOk = title.length >= 40 && title.length <= 65;
      const hasBrand = title.includes("IAShovon");
      const hasFullName = title.includes("Iftakhar Ahmmed Shovon");
      console.log("  Title:", title);
      console.log("  Length:", title.length, "chars", lenOk ? "✅" : "⚠️ (40-65 recommended)");
      console.log("  Brand 'IAShovon':", hasBrand ? "✅" : "❌ MISSING");
      console.log("  Full name in title:", hasFullName ? "❌ VIOLATION" : "✅ OK");

      if (!hasBrand || hasFullName || !lenOk) allPass = false;
    } else {
      console.log("  Title: [DYNAMIC TEMPLATE]", title);
      console.log("  Brand 'IAShovon':", title.includes("IAShovon") ? "✅" : "❌ MISSING");
      if (!title.includes("IAShovon")) allPass = false;
    }
  }

  if (descMatch) {
    const desc = descMatch[1];
    const lenOk = desc.length <= 160;
    console.log("  Description length:", desc.length, "chars", lenOk ? "✅" : "❌ OVER 160");
    if (!lenOk) allPass = false;
  }

  if (ogTitleMatch) {
    const ogt = ogTitleMatch[1];
    const isDynamic = ogt.includes("${");
    if (!isDynamic) {
      const hasBrand = ogt.includes("IAShovon");
      console.log("  OG Title brand:", hasBrand ? "✅" : "❌ MISSING");
      if (!hasBrand) allPass = false;
    }
  }
  console.log("");
});

console.log("=== OVERALL:", allPass ? "ALL CHECKS PASSED ✅" : "SOME CHECKS FAILED ❌", "===");