import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '../../../lib/blog';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = blogPosts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="section">
        <div className="section-header">
          <p className="section-eyebrow">Blog</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
        </div>

        <article className="blog-article" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        <Link href="/blog" className="text-link">
          Back to blog
        </Link>
      </section>
    </main>
  );
}
