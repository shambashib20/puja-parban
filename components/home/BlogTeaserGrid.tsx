"use client";

import Link from "next/link";
import type { BlogPostSummary } from "@/lib/types";
import { useHorizontalCarousel } from "@/hooks/useHorizontalCarousel";

export function BlogTeaserGrid({ posts }: { posts: BlogPostSummary[] }) {
  const { trackRef, scroll } = useHorizontalCarousel({ cardSelector: ".blog-card" });

  return (
    <section className="section blog-section" id="blog">
      <div className="container">
        <div className="blog-header">
          <h2 className="section-title">
            Latest from <span className="blog-title-highlight">Our Blog</span>
          </h2>
        </div>
        <div className="blog-carousel">
          <button className="blog-nav blog-nav-prev" onClick={() => scroll(-1)} aria-label="Previous blog post">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="blog-grid" ref={trackRef}>
            {posts.map((post) => (
              <div className="blog-card" key={post.slug}>
                <div className="blog-img">
                  <img src={post.thumbnail} alt={post.imageAlt} />
                </div>
                <div className="blog-content">
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-read">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className="blog-nav blog-nav-next" onClick={() => scroll(1)} aria-label="Next blog post">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
