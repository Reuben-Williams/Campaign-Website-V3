import { PageTemplate } from "@/components/PageTemplate";
import { EndorsementsSection, WidePhotoSection } from "@/components/Sections";

export default function EndorsementsPage() {
  return (
    <PageTemplate pageKey="endorsements">
      <EndorsementsSection />
      <WidePhotoSection />
    </PageTemplate>
  );
}
