import { siteConfig } from '../../lib/siteConfig';

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">About Reliable Motorsports</p>
          <h1>About Reliable Motorsports</h1>
          <p>
            Reliable Motorsports is focused on delivering honest automotive service with the attention to detail enthusiasts expect. Whether your vehicle needs maintenance, repairs, diagnostics, or custom installation work, our goal is simple: do the job properly and treat every car with care.
          </p>
          <p>
            We're building a shop experience that feels professional, straightforward, and quality-driven from the moment you arrive — appointment only, so every vehicle gets proper attention rather than being rushed through a bay.
          </p>
        </div>

        <div className="pillar-grid">
          <div className="pillar-card">
            <h3>Quality Workmanship</h3>
            <p>Clean, careful service with a focus on doing things the right way.</p>
          </div>
          <div className="pillar-card">
            <h3>Honest Service</h3>
            <p>Straightforward communication and dependable support you can trust.</p>
          </div>
          <div className="pillar-card">
            <h3>Enthusiast Mindset</h3>
            <p>Built for daily drivers, weekend cars, and owners who pay attention to the details.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
