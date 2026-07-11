import { PageTemplate } from "@/components/PageTemplate";
import { PrioritiesSection, VolunteerSection, WidePhotoSection } from "@/components/Sections";

export default function AboutPage() {
  return (
    <PageTemplate pageKey="about">
      <WidePhotoSection />
      <PrioritiesSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
