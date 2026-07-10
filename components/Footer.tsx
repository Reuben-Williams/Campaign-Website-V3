import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>{siteConfig.shortName}</h2>
          <p>
            A demo-ready campaign website prepared for GitHub Pages today, with a clean path
            toward Vercel hosting and Supabase-backed features later.
          </p>
          <span className="disclaimer">{siteConfig.paidFor}</span>
        </div>
        <div>
          <h3>Navigation</h3>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>Demo Setup</h3>
          <nav aria-label="Deployment links">
            <Link href="/donate">Contribution Demo</Link>
            <Link href="/volunteer">Volunteer Demo</Link>
            <Link href="/news">Campaign Updates</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
