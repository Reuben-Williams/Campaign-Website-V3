"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

function LanguageToggle({ className = "" }: { className?: string }) {
  const { copy, language, toggleLanguage } = useLanguage();

  return (
    <button
      className={`language-toggle ${className}`.trim()}
      type="button"
      aria-label={copy.labels.languageAria}
      aria-pressed={language === "es"}
      onClick={toggleLanguage}
    >
      {copy.labels.languageSwitch}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { copy } = useLanguage();

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link className="brand" href="/" aria-label={copy.labels.brandHome}>
          {copy.siteConfig.name}
          <span>{copy.siteConfig.office}</span>
        </Link>

        <nav className="desktop-nav" aria-label={copy.labels.mainNavigation}>
          {copy.navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <LanguageToggle className="desktop-language-toggle" />
          <Link className="button button-outline" href="/donate">
            {copy.labels.donate}
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label={copy.labels.mobileNavigation}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? copy.labels.close : copy.labels.menu}
          </button>
        </div>
      </div>

      {open ? (
        <div className="container mobile-nav">
          <nav aria-label={copy.labels.mobileNavigation}>
            <LanguageToggle className="mobile-language-toggle" />
            {copy.navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setOpen(false)}>
              {copy.labels.donate}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
