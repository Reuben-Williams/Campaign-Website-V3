import { PageTemplate } from "@/components/PageTemplate";
import { VolunteerFormSection, VolunteerSection } from "@/components/Sections";

export default function VolunteerPage() {
  return (
    <PageTemplate pageKey="volunteer">
      <VolunteerSection />
      <VolunteerFormSection />
    </PageTemplate>
  );
}
