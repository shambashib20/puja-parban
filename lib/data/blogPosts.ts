import type { BlogPost, BlogPostSummary } from "@/lib/types";
import rawBlogPosts from "./blogPosts.json";

/**
 * Config-driven blog content.
 *
 * Today this reads from a local JSON file. When the admin panel API is
 * ready, swap the body of these functions for a `fetch()` call — every
 * caller (home page teaser grid, blog detail route) already goes through
 * this module, so no component code needs to change.
 */

const blogPosts = rawBlogPosts as BlogPost[];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getBlogPostSummaries(): Promise<BlogPostSummary[]> {
  return blogPosts.map(({ slug, title, excerpt, thumbnail, imageAlt }) => ({
    slug,
    title,
    excerpt,
    thumbnail,
    imageAlt,
  }));
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  return blogPosts.find((post) => post.slug === slug);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  return blogPosts.map((post) => post.slug);
}
