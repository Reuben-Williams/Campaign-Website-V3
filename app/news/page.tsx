import { PageTemplate } from "@/components/PageTemplate";
import { NewsSection, VolunteerSection } from "@/components/Sections";
import { pages } from "@/content/site";

export default function NewsPage() {
  return (
    <PageTemplate page={pages.news}>
      <NewsSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
