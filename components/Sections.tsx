"use client";

import Link from "next/link";
import { CampaignImage } from "@/components/CampaignImage";
import { useLanguage } from "@/components/LanguageProvider";
import { donationAmounts } from "@/content/site";

export function PrioritiesSection() {
  const { copy } = useLanguage();
  const section = copy.sections.priorities;

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </div>
        <div className="priority-grid">
          {copy.priorities.map((priority) => (
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
  const { copy } = useLanguage();
  const section = copy.sections.about;

  return (
    <section className="section section-muted">
      <div className="container split">
        <div className="media-frame">
          <CampaignImage image={copy.images.community} sizes="(max-width: 960px) 100vw, 44vw" />
        </div>
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
          <p className="lede">{section.body}</p>
          <div className="hero-actions">
            <Link className="button button-secondary" href="/about">
              {section.readBio}
            </Link>
            <Link className="button button-outline" href="/events">
              {section.attendEvent}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EventsSection() {
  const { copy } = useLanguage();
  const section = copy.sections.events;

  return (
    <section className="section">
      <div className="container split">
        <div>
          <div className="section-head">
            <p className="eyebrow">{section.eyebrow}</p>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
          <div className="timeline">
            {copy.events.map((event) => (
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
          <CampaignImage image={copy.images.listening} sizes="(max-width: 960px) 100vw, 44vw" />
        </div>
      </div>
    </section>
  );
}

export function DonateSection() {
  const { copy } = useLanguage();
  const section = copy.sections.donate;

  return (
    <section className="section section-muted">
      <div className="container split">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
          <p className="lede">{section.body}</p>
        </div>
        <div className="donate-panel">
          <h3>{section.chooseAmount}</h3>
          <div className="amount-grid">
            {donationAmounts.map((amount) => (
              <button className="amount" key={amount} type="button">
                ${amount}
              </button>
            ))}
          </div>
          <p>{section.disabled}</p>
          <Link className="button button-primary" href="/volunteer">
            {section.helpAnotherWay}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function EndorsementsSection() {
  const { copy } = useLanguage();
  const section = copy.sections.endorsements;

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </div>
        <div className="endorsement-grid">
          {copy.endorsements.map((endorsement) => (
            <article className="card endorsement-card" key={endorsement}>
              <span className="label">{section.label}</span>
              <h3>{endorsement}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  const { copy } = useLanguage();
  const section = copy.sections.news;

  return (
    <section className="section section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </div>
        <div className="news-grid">
          {copy.news.map((item) => (
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
  const { copy } = useLanguage();
  const section = copy.sections.volunteer;

  return (
    <section className="section">
      <div className="container split">
        <div className="media-frame">
          <CampaignImage image={copy.images.literature} sizes="(max-width: 960px) 100vw, 44vw" />
        </div>
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
          <p className="lede">{section.body}</p>
          <div className="role-grid">
            {copy.volunteerRoles.map((role) => (
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
  const { copy } = useLanguage();
  const section = copy.sections.volunteerForm;

  return (
    <section className="section section-muted">
      <div className="container split">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
          <p className="lede">{section.body}</p>
        </div>
        <form className="card priority-card" aria-label={section.formLabel}>
          <div className="form-grid">
            <input className="field" aria-label={section.firstName} type="text" value="" readOnly />
            <input className="field" aria-label={section.lastName} type="text" value="" readOnly />
            <input className="field" aria-label={section.email} type="email" value="" readOnly />
            <input className="field" aria-label={section.phone} type="tel" value="" readOnly />
          </div>
          <p>{section.note}</p>
          <button className="button button-primary" type="button">
            {section.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

export function WidePhotoSection() {
  const { copy } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div className="wide-photo">
          <CampaignImage image={copy.images.table} sizes="100vw" />
        </div>
      </div>
    </section>
  );
}
