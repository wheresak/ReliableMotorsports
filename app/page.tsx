import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '../lib/siteConfig';

const services = [
  { label: 'Diagnostics', href: '/services/diagnostics' },
  { label: 'Oil Changes', href: '/services/oil-changes' },
  { label: 'Brake Work', href: '/services/brake-work' },
  { label: 'Maintenance', href: '/services/maintenance' },
  { label: 'Suspension Work', href: '/services/suspension-work' },
  { label: 'Modifications', href: '/services/modifications' },
];

const reviews = [
  {
    name: 'Jason',
    rating: 5,
    quote: 'Reliable Motorsports fixed my brake issue quickly and explained everything clearly.',
  },
  {
    name: 'Mia',
    rating: 5,
    quote: 'Great shop in Scarborough — honest service and attention to detail.',
  },
  {
    name: 'Derek',
    rating: 5,
    quote: 'They diagnosed a weird check engine light and solved the root cause. Highly recommend.',
  },
];

const galleryImages = [
  { src: '/images/hero-car-lift.png', alt: 'Car on a lift at Reliable Motorsports' },
  { src: '/images/brakes.jpeg', alt: 'Brake service work' },
  { src: '/images/lift.png', alt: 'Shop bay with a vehicle lift' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Reliable Motorsports</p>
          <h1>Reliable Service. Quality Work. Built for Drivers Who Care.</h1>
          <p className="intro-text">
            Professional automotive service, maintenance, diagnostics, and custom work for daily drivers and enthusiast builds alike — based in Scarborough, Ontario.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Service
            </Link>
            <Link href="/services" className="btn btn-secondary">
              View Services
            </Link>
          </div>
          <div className="trust-strip">
            <span>Diagnostics</span>
            <span>Maintenance</span>
            <span>Custom Work</span>
            <span>Appointment-Only Shop</span>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/logo/reliable-logo.png" alt="Reliable Motorsports logo" width={520} height={520} priority />
        </div>
      </section>

      <section className="section service-teaser">
        <div className="section-header">
          <p className="section-eyebrow">Automotive Services Done Right</p>
          <h2>From essential maintenance to enthusiast-focused installs, we keep your vehicle running properly and looking after the details that matter.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="card-link">
              <div className="card">
                <h3>{service.label}</h3>
                <p>Learn how Reliable Motorsports handles {service.label.toLowerCase()} with care and quality.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section about-teaser">
        <div className="content-panel">
          <p className="section-eyebrow">A Shop Built on Dependable Work and Clean Execution</p>
          <h2>Reliable Motorsports is focused on delivering honest automotive service with the attention to detail enthusiasts expect.</h2>
          <p>
            Whether your vehicle needs maintenance, repairs, diagnostics, or custom installation work, our goal is simple: do the job properly and treat every car with care.
          </p>
          <Link href="/about" className="text-link">
            Learn more about our shop
          </Link>
        </div>
      </section>

      <section className="section reviews-teaser">
        <div className="section-header">
          <p className="section-eyebrow">What Drivers Are Saying</p>
          <h2>Trusted local reviews from drivers across the GTA.</h2>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.name} className="review-card">
              <p className="review-quote">“{review.quote}”</p>
              <p className="review-meta">{review.name} — {review.rating}★</p>
            </div>
          ))}
        </div>
        <div className="cta-row">
          <Link href="/reviews" className="text-link">
            Read more reviews
          </Link>
          <a href={siteConfig.googleReviewLink} target="_blank" rel="noreferrer" className="text-link">
            Leave a Google review
          </a>
        </div>
      </section>

      <section className="section gallery-teaser">
        <div className="section-header">
          <p className="section-eyebrow">Shop Preview</p>
          <h2>See the work and shop quality at Reliable Motorsports.</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.src} className="gallery-item">
              <Image src={image.src} alt={image.alt} width={380} height={260} />
            </div>
          ))}
        </div>
        <div className="gallery-link-wrap">
          <Link href="/gallery" className="text-link">
            View the full gallery
          </Link>
        </div>
      </section>

      <section className="section final-cta-band">
        <div className="final-cta-panel">
          <div>
            <p className="section-eyebrow">Let’s Get Your Car In</p>
            <h2>Book Service at Reliable Motorsports</h2>
          </div>
          <div className="final-actions">
            <Link href="/contact" className="btn btn-primary">
              Book Service
            </Link>
            <a href={siteConfig.phoneHref} className="phone-link">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
