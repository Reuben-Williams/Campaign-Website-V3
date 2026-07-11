"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2>{copy.siteConfig.shortName}</h2>
          <p>{copy.footer.body}</p>
          <span className="disclaimer">{copy.siteConfig.paidFor}</span>
        </div>
        <div>
          <h3>{copy.footer.navigationHeading}</h3>
          <nav aria-label={copy.footer.footerNavigationLabel}>
            {copy.navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3>{copy.footer.actionHeading}</h3>
          <nav aria-label={copy.footer.actionLinksLabel}>
            <Link href="/donate">{copy.footer.contribute}</Link>
            <Link href="/volunteer">{copy.footer.volunteer}</Link>
            <Link href="/news">{copy.footer.updates}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
