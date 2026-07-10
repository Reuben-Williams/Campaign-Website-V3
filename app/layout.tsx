import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://reuben-williams.github.io/Campaign-Website-V3",
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
