import { faqItems } from '../../lib/faq';

export default function FAQPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">Frequently Asked Questions</p>
          <h1>FAQ</h1>
          <p>Answers to common questions about appointments, service areas, and how Reliable Motorsports operates.</p>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <div key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
