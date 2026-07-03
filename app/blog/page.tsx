import Link from 'next/link';
import { blogPosts } from '../../lib/blog';

export default function BlogPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">Blog</p>
          <h1>Blog</h1>
          <p>Insights, maintenance tips, and local automotive advice for Scarborough drivers and car enthusiasts.</p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card-link">
              <div className="card">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
