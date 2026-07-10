"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link className="brand" href="/" aria-label={`${siteConfig.shortName} home`}>
          {siteConfig.name}
          <span>{siteConfig.office}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link className="button button-outline" href="/donate">
            Donate
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="container mobile-nav">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setOpen(false)}>
              Donate
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
