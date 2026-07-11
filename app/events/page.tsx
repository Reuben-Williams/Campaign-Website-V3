import { PageTemplate } from "@/components/PageTemplate";
import { EventsSection, VolunteerFormSection } from "@/components/Sections";

export default function EventsPage() {
  return (
    <PageTemplate pageKey="events">
      <EventsSection />
      <VolunteerFormSection />
    </PageTemplate>
  );
}
