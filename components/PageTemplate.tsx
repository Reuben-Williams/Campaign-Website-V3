import { Hero } from "@/components/Hero";
import { SiteShell } from "@/components/SiteShell";
import type { pages } from "@/content/site";

type PageKey = keyof typeof pages;

type PageTemplateProps = {
  page: (typeof pages)[PageKey];
  children: React.ReactNode;
};

export function PageTemplate({ page, children }: PageTemplateProps) {
  return (
    <SiteShell>
      <main className="route-page">
        <Hero
          eyebrow={page.eyebrow}
          heading={page.heading}
          body={page.body}
          image={page.image}
        />
        {children}
      </main>
    </SiteShell>
  );
}
