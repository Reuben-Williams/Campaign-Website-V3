const repoName = "Campaign-Website-V3";
const isGithubPages = process.env.GITHUB_PAGES !== "false";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubPages ? `/${repoName}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
