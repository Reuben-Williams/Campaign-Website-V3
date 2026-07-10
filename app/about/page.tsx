import { PageTemplate } from "@/components/PageTemplate";
import { PrioritiesSection, VolunteerSection, WidePhotoSection } from "@/components/Sections";
import { pages } from "@/content/site";

export default function AboutPage() {
  return (
    <PageTemplate page={pages.about}>
      <WidePhotoSection />
      <PrioritiesSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
