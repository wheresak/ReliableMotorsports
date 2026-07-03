import { siteConfig } from '../../lib/siteConfig';

const sampleReviews = [
  {
    name: 'Alex',
    rating: 5,
    text: 'Excellent service, clear communication, and fair pricing. Highly recommended for Scarborough drivers.',
  },
  {
    name: 'Tanya',
    rating: 5,
    text: 'Reliable Motorsports handled my diagnostics quickly and found the real problem. Great shop.',
  },
  {
    name: 'Jordan',
    rating: 5,
    text: 'Very professional and honest. They did a great job on my suspension install.',
  },
];

export default function ReviewsPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">Google Reviews</p>
          <h1>What Drivers Are Saying</h1>
          <p>Top customer feedback from Reliable Motorsports clients in Scarborough and the GTA.</p>
        </div>

        <div className="review-grid">
          {sampleReviews.map((review) => (
            <div key={review.name} className="review-card">
              <p className="review-quote">“{review.text}”</p>
              <p className="review-meta">{review.name} — {review.rating}★</p>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a href={siteConfig.googleReviewLink} target="_blank" rel="noreferrer" className="text-link">
            Leave a Google review
          </a>
        </div>
      </section>
    </main>
  );
}
