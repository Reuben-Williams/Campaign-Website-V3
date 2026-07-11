"use client";

import { Hero } from "@/components/Hero";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteShell } from "@/components/SiteShell";
import type { PageKey } from "@/content/site";

type PageTemplateProps = {
  pageKey: PageKey;
  children: React.ReactNode;
};

export function PageTemplate({ pageKey, children }: PageTemplateProps) {
  const { copy } = useLanguage();
  const page = copy.pages[pageKey];
  const image = copy.images[page.image];

  return (
    <SiteShell>
      <main className="route-page">
        <Hero
          eyebrow={page.eyebrow}
          heading={page.heading}
          body={page.body}
          image={image}
          caption={copy.sections.heroCaption}
          primaryLabel={copy.footer.volunteer}
          secondaryLabel={copy.labels.donate}
        />
        {children}
      </main>
    </SiteShell>
  );
}
