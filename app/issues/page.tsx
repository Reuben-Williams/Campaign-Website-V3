import { PageTemplate } from "@/components/PageTemplate";
import { DonateSection, PrioritiesSection, VolunteerSection } from "@/components/Sections";
import { pages } from "@/content/site";

export default function IssuesPage() {
  return (
    <PageTemplate page={pages.issues}>
      <PrioritiesSection />
      <DonateSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
