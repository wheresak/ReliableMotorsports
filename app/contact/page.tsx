import { siteConfig } from '../../lib/siteConfig';

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">Let’s Get Your Car In</p>
          <h1>Contact Reliable Motorsports</h1>
          <p>Reach out to book service, ask about a repair, or discuss your next modification.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-panel">
            <h2>Contact Info</h2>
            <p>{siteConfig.address}</p>
            <p>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </p>
            <p>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
                {siteConfig.instagram}
              </a>
            </p>
            <p>{siteConfig.hours}</p>
          </div>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="phone-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="phone-field" />
              </label>
            </p>
            <label>
              Full Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" required />
            </label>
            <label>
              Vehicle / Service Needed
              <input type="text" name="service" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={6} required />
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
