import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogBreadcrumb } from "@/components/blog/BlogBreadcrumb";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/data/blogPosts";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Next.js 16.3.1's Turbopack dev server sometimes hands dynamic route
 * `params` to the page component still percent-encoded (e.g.
 * "%E0%A6%B0..." instead of the decoded Bengali text), even though the
 * same param is already decoded when passed to `generateMetadata`. Real
 * slugs never contain "%", so decoding here is a safe no-op in every
 * other case (including the static export build, where params already
 * arrive decoded).
 */
function decodeSlugParam(rawSlug: string): string {
  if (!rawSlug.includes("%")) return rawSlug;
  try {
    return decodeURIComponent(rawSlug);
  } catch {
    return rawSlug;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(decodeSlugParam(slug));
  if (!post) return {};
  return {
    title: `${post.title} — PujaParban`,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(decodeSlugParam(slug));

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header activeOverride="/#blog" />

      <section className="section blog-detail">
        <div className="container">
          <BlogBreadcrumb label={post.breadcrumbLabel} />

          <div className="blog-detail-thumb">
            <img src={post.thumbnail} alt={post.imageAlt} />
          </div>

          <BlogArticle post={post} />

          <Link href="/#blog" className="blog-back">
            &larr; ব্লগে ফিরে যান
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
