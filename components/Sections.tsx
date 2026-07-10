import Link from "next/link";
import { CampaignImage } from "@/components/CampaignImage";
import {
  donationAmounts,
  endorsements,
  events,
  images,
  news,
  priorities,
  volunteerRoles,
} from "@/content/site";

export function PrioritiesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Campaign priorities</p>
          <h2>Focused on the everyday work residents can feel.</h2>
          <p>
            These issue areas mirror the structure of the original campaign export while using
            clearer, locally grounded content for the owner demo.
          </p>
        </div>
        <div className="priority-grid">
          {priorities.map((priority) => (
            <article className="card priority-card" key={priority.title}>
              <span className="label">{priority.label}</span>
              <h3>{priority.title}</h3>
              <p>{priority.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="section section-muted">
      <div className="container split">
        <div className="media-frame">
          <CampaignImage image={images.community} sizes="(max-width: 960px) 100vw, 44vw" />
        </div>
        <div>
          <p className="eyebrow">About Carmen</p>
          <h2>Visible, accessible, and present in the district.</h2>
          <p className="lede">
            The original static export used generated political stock scenes. This version uses
            the real campaign photo set already in the workspace so the demo feels specific to
            Carmen Morales from the first screen.
          </p>
          <div className="hero-actions">
            <Link className="button button-secondary" href="/about">
              Read Bio
            </Link>
            <Link className="button button-outline" href="/events">
              Attend Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EventsSection() {
  return (
    <section className="section">
      <div className="container split">
        <div>
          <div className="section-head">
            <p className="eyebrow">Events</p>
            <h2>Organizing calendar</h2>
            <p>Use this area for real campaign events once dates are confirmed.</p>
          </div>
          <div className="timeline">
            {events.map((event) => (
              <article className="card event-card" key={event.title}>
                <div className="event-date">
                  <div>
                    <span>{event.date}</span>
                    {event.time}
                  </div>
                </div>
                <div>
                  <h3>{event.title}</h3>
                  <p>
                    <strong>{event.location}</strong>
                  </p>
                  <p>{event.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="media-frame">
          <CampaignImage image={images.listening} sizes="(max-width: 960px) 100vw, 44vw" />
        </div>
      </div>
    </section>
  );
}

export function DonateSection() {
  return (
    <section className="section section-muted">
      <div className="container split">
        <div>
          <p className="eyebrow">Donate</p>
          <h2>Ready for a real contribution provider later.</h2>
          <p className="lede">
            This demo keeps contribution controls static for GitHub Pages. When the production
            stack is ready, this page can connect to the selected compliance and payment provider.
          </p>
        </div>
        <div className="donate-panel">
          <h3>Choose an amount</h3>
          <div className="amount-grid">
            {donationAmounts.map((amount) => (
              <button className="amount" key={amount} type="button">
                ${amount}
              </button>
            ))}
          </div>
          <p>Contribution processing is intentionally disabled in this GitHub Pages demo.</p>
          <Link className="button button-primary" href="/volunteer">
            Help Another Way
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EndorsementsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Endorsements</p>
          <h2>Support that can grow into a verified endorsements page.</h2>
          <p>
            This demo lists endorsement categories until the campaign confirms the final public
            names, logos, and approval language.
          </p>
        </div>
        <div className="endorsement-grid">
          {endorsements.map((endorsement) => (
            <article className="card endorsement-card" key={endorsement}>
              <span className="label">Supporter</span>
              <h3>{endorsement}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">News</p>
          <h2>Campaign updates</h2>
          <p>Static news cards for the GitHub Pages demo, ready to become Supabase content later.</p>
        </div>
        <div className="news-grid">
          {news.map((item) => (
            <article className="card news-card" key={item.title}>
              <span className="label">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VolunteerSection() {
  return (
    <section className="section">
      <div className="container split">
        <div className="media-frame">
          <CampaignImage image={images.literature} sizes="(max-width: 960px) 100vw, 44vw" />
        </div>
        <div>
          <p className="eyebrow">Volunteer</p>
          <h2>Build the field program one conversation at a time.</h2>
          <p className="lede">
            The form below can stay static on GitHub Pages, then submit to Supabase or a campaign
            CRM when the production stack is selected.
          </p>
          <div className="role-grid">
            {volunteerRoles.map((role) => (
              <div className="card role-card" key={role}>
                <strong>{role}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VolunteerFormSection() {
  return (
    <section className="section section-muted">
      <div className="container split">
        <div>
          <p className="eyebrow">Sign up</p>
          <h2>Static demo form</h2>
          <p className="lede">
            These fields show the intended experience without collecting data on GitHub Pages.
          </p>
        </div>
        <form className="card priority-card" aria-label="Volunteer interest form">
          <div className="form-grid">
            <input className="field" aria-label="First name" type="text" value="" readOnly />
            <input className="field" aria-label="Last name" type="text" value="" readOnly />
            <input className="field" aria-label="Email address" type="email" value="" readOnly />
            <input className="field" aria-label="Phone number" type="tel" value="" readOnly />
          </div>
          <p>Production submission can be wired to Supabase once the project is created.</p>
          <button className="button button-primary" type="button">
            Demo Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export function WidePhotoSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="wide-photo">
          <CampaignImage image={images.table} sizes="100vw" />
        </div>
      </div>
    </section>
  );
}
