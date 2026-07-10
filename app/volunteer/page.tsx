import { PageTemplate } from "@/components/PageTemplate";
import { VolunteerFormSection, VolunteerSection } from "@/components/Sections";
import { pages } from "@/content/site";

export default function VolunteerPage() {
  return (
    <PageTemplate page={pages.volunteer}>
      <VolunteerSection />
      <VolunteerFormSection />
    </PageTemplate>
  );
}
