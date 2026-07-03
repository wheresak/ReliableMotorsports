import { notFound } from 'next/navigation';
import { services } from '../../../lib/services';
import { siteConfig } from '../../../lib/siteConfig';

interface ServicePageProps {
  params: {
    serviceSlug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((item) => item.slug === params.serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">{service.title}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
        </div>

        <div className="detail-grid">
          <div className="detail-panel">
            <h2>What's Included</h2>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="detail-panel">
            <h2>Signs You Need This Service</h2>
            <ul>
              {service.signs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-cta">
          <p>Book a service appointment in Scarborough today.</p>
          <a href={siteConfig.phoneHref} className="btn btn-primary">
            Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
