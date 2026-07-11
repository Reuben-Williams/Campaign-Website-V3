import { PageTemplate } from "@/components/PageTemplate";
import {
  AboutSection,
  DonateSection,
  EndorsementsSection,
  EventsSection,
  NewsSection,
  PrioritiesSection,
  VolunteerSection,
} from "@/components/Sections";

export default function HomePage() {
  return (
    <PageTemplate pageKey="home">
      <PrioritiesSection />
      <AboutSection />
      <EventsSection />
      <DonateSection />
      <EndorsementsSection />
      <NewsSection />
      <VolunteerSection />
    </PageTemplate>
  );
}
