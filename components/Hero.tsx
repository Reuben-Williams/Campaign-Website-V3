import Link from "next/link";
import { CampaignImage } from "@/components/CampaignImage";

type HeroProps = {
  eyebrow: string;
  heading: string;
  body: string;
  image: {
    src: string;
    alt: string;
  };
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow,
  heading,
  body,
  image,
  primaryHref = "/volunteer",
  primaryLabel = "Volunteer",
  secondaryHref = "/donate",
  secondaryLabel = "Donate",
}: HeroProps) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{heading}</h1>
          <p className="lede">{body}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={primaryHref}>
              {primaryLabel}
            </Link>
            <Link className="button button-secondary" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <CampaignImage image={image} priority sizes="(max-width: 960px) 100vw, 42vw" />
          <div className="media-caption">Local campaign photography now powers the demo.</div>
        </div>
      </div>
    </section>
  );
}
