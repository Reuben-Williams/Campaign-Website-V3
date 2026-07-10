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
import { pages } from "@/content/site";

export default function HomePage() {
  return (
    <PageTemplate page={pages.home}>
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
