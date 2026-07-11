import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import assert from "node:assert/strict";

const root = path.resolve(import.meta.dirname, "..");

async function readProjectFile(filePath) {
  return readFile(path.join(root, filePath), "utf8");
}

test("Next.js static export is configured for the repository path", async () => {
  const config = await readProjectFile("next.config.mjs");

  assert.match(config, /output:\s*["']export["']/);
  assert.match(config, /basePath:\s*basePath/);
  assert.match(config, /Campaign-Website-V3/);
  assert.match(config, /unoptimized:\s*true/);
});

test("all campaign routes exist in the App Router", async () => {
  const expectedRoutes = [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/issues/page.tsx",
    "app/events/page.tsx",
    "app/donate/page.tsx",
    "app/endorsements/page.tsx",
    "app/news/page.tsx",
    "app/volunteer/page.tsx",
  ];

  await Promise.all(
    expectedRoutes.map(async (route) => {
      const contents = await readProjectFile(route);
      assert.match(contents, /export default function/);
    }),
  );
});

test("deployment environment variables are documented", async () => {
  const envExample = await readProjectFile(".env.example");

  assert.match(envExample, /NEXT_PUBLIC_SITE_URL=/);
});

test("shared navigation includes a dedicated home link first", async () => {
  const siteContent = await readProjectFile("content/site.ts");

  assert.match(siteContent, /export const navItems = \[\s*\{\s*label:\s*["']Home["'],\s*href:\s*["']\/["']\s*\}/s);
});

test("source files use local campaign images instead of remote placeholders", async () => {
  const sourceDirs = ["app", "components", "content", "lib"];
  const files = [];

  async function collect(dir) {
    const entries = await readdir(path.join(root, dir), { withFileTypes: true });
    await Promise.all(
      entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await collect(fullPath);
        } else if (/\.(tsx|ts|mjs|css)$/.test(entry.name)) {
          files.push(fullPath);
        }
      }),
    );
  }

  await Promise.all(sourceDirs.map(collect));

  assert.ok(files.length > 0, "expected source files to exist");

  const combined = (await Promise.all(files.map(readProjectFile))).join("\n");
  assert.doesNotMatch(combined, /lh3\.googleusercontent\.com|aida-public|mainplaceholder|placeholder/i);
  assert.match(combined, /\/images\/campaign\//);
});

test("public source copy avoids internal platform and staging language", async () => {
  const sourceDirs = ["app", "components", "content", "lib"];
  const files = [".env.example", "next.config.mjs", "package.json"];

  async function collect(dir) {
    const entries = await readdir(path.join(root, dir), { withFileTypes: true });
    await Promise.all(
      entries.map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await collect(fullPath);
        } else if (/\.(tsx|ts|mjs|css)$/.test(entry.name)) {
          files.push(fullPath);
        }
      }),
    );
  }

  await Promise.all(sourceDirs.map(collect));

  const combined = (await Promise.all(files.map(readProjectFile))).join("\n");
  const blockedWords = ["de" + "mo", "git" + "hub", "ver" + "cel", "supa" + "base"];
  const blockedPattern = new RegExp(`\\b(${blockedWords.join("|")})\\b`, "i");
  assert.doesNotMatch(combined, blockedPattern);
});
