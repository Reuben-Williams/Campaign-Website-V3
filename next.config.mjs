const repoName = "Campaign-Website-V3";
const usesProjectBasePath = process.env.PROJECT_SITE_BASE_PATH !== "false";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (usesProjectBasePath ? `/${repoName}` : "");

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
