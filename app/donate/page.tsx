import { PageTemplate } from "@/components/PageTemplate";
import { DonateSection, VolunteerSection } from "@/components/Sections";
import { pages } from "@/content/site";

export default function DonatePage() {
  return (
    <PageTemplate page={pages.donate}>
      <DonateSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
