import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>{siteConfig.shortName}</h2>
          <p>
            A polished campaign website built for residents, supporters, volunteers, and public
            updates.
          </p>
          <span className="disclaimer">{siteConfig.paidFor}</span>
        </div>
        <div>
          <h3>Navigation</h3>
          <nav aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>Take Action</h3>
          <nav aria-label="Campaign action links">
            <Link href="/donate">Contribute</Link>
            <Link href="/volunteer">Volunteer</Link>
            <Link href="/news">Campaign Updates</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
