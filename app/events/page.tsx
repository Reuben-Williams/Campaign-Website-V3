import { PageTemplate } from "@/components/PageTemplate";
import { EventsSection, VolunteerFormSection } from "@/components/Sections";
import { pages } from "@/content/site";

export default function EventsPage() {
  return (
    <PageTemplate page={pages.events}>
      <EventsSection />
      <VolunteerFormSection />
    </PageTemplate>
  );
}
