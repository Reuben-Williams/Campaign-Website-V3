import { PageTemplate } from "@/components/PageTemplate";
import { DonateSection, VolunteerSection } from "@/components/Sections";

export default function DonatePage() {
  return (
    <PageTemplate pageKey="donate">
      <DonateSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
