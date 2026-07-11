import { PageTemplate } from "@/components/PageTemplate";
import { DonateSection, PrioritiesSection, VolunteerSection } from "@/components/Sections";

export default function IssuesPage() {
  return (
    <PageTemplate pageKey="issues">
      <PrioritiesSection />
      <DonateSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
