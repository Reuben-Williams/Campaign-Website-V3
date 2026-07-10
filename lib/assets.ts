export function publicAssetPath(src: string) {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.GITHUB_PAGES === "false" ? "" : "/Campaign-Website-V3");
  return `${basePath}${src}`;
}
