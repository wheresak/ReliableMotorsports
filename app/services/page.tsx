import Link from 'next/link';
import { serviceOverview, services } from '../../lib/services';

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">Automotive Services</p>
          <h1>Automotive Services</h1>
          <p>{serviceOverview.intro}</p>
        </div>

        <div className="card-grid">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="card-link">
              <div className="card">
                <h3>{service.title.replace(' — Scarborough, ON', '')}</h3>
                <p>Learn more about {service.title.toLowerCase().replace(' — scarborough, on', '')}.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
