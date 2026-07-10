import { PageTemplate } from "@/components/PageTemplate";
import { EndorsementsSection, WidePhotoSection } from "@/components/Sections";
import { pages } from "@/content/site";

export default function EndorsementsPage() {
  return (
    <PageTemplate page={pages.endorsements}>
      <EndorsementsSection />
      <WidePhotoSection />
    </PageTemplate>
  );
}
