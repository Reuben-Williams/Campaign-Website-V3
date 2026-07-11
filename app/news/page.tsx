import { PageTemplate } from "@/components/PageTemplate";
import { NewsSection, VolunteerSection } from "@/components/Sections";

export default function NewsPage() {
  return (
    <PageTemplate pageKey="news">
      <NewsSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
