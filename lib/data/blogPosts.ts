import type { BlogPost, BlogPostSummary } from "@/lib/types";
import rawBlogPosts from "./blogPosts.json";
import { fetchAdminApi, type CarouselPage } from "@/lib/adminApi";

/**
 * Config-driven blog content.
 *
 * The home page teaser grid and the blog detail page both read from the
 * live admin CMS (`/api/public/blogs`); the bundled `blogPosts.json` is only
 * a fallback for when the admin API is unreachable. CMS slugs are the raw
 * Bengali/English title text (may contain spaces, `?`, etc.), so callers
 * must `encodeURIComponent` them when building links, and this module
 * re-encodes them again for the outbound API request.
 */

const blogPosts = rawBlogPosts as BlogPost[];

interface AdminBlogListItem {
  slug: string;
  titleBn: string;
  titleEn?: string;
  excerptBn?: string;
  excerptEn?: string;
  coverImageUrl?: string;
}

interface AdminBlogDetail extends AdminBlogListItem {
  bodyBn?: string;
  bodyEn?: string;
}

function toBodyBlocks(bodyText: string) {
  return bodyText
    .split(/\n{2,}/)
    .map((text) => text.trim())
    .filter(Boolean)
    .map((text) => ({ type: "p" as const, text }));
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getBlogPostSummaries(): Promise<BlogPostSummary[]> {
  const page = await fetchAdminApi<CarouselPage<AdminBlogListItem>>(
    "/api/public/blogs?limit=12"
  );
  if (!page || page.items.length === 0) {
    return blogPosts.map(({ slug, title, excerpt, thumbnail, imageAlt }) => ({
      slug,
      title,
      excerpt,
      thumbnail,
      imageAlt,
    }));
  }

  return page.items.map((post) => ({
    slug: post.slug,
    title: post.titleEn || post.titleBn,
    excerpt: post.excerptEn || post.excerptBn || "",
    thumbnail: post.coverImageUrl || "/assets/blogs/1.png",
    imageAlt: post.titleEn || post.titleBn,
  }));
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const data = await fetchAdminApi<{ blog: AdminBlogDetail }>(
    `/api/public/blogs/${encodeURIComponent(slug)}`
  );
  const post = data?.blog;
  if (post) {
    const title = post.titleEn || post.titleBn;
    const bodyText = post.bodyEn || post.bodyBn || "";
    return {
      slug: post.slug,
      title,
      excerpt: post.excerptEn || post.excerptBn || "",
      thumbnail: post.coverImageUrl || "/assets/blogs/1.png",
      imageAlt: title,
      lang: post.bodyEn ? "en" : "bn",
      breadcrumbLabel: title,
      body: toBodyBlocks(bodyText),
    };
  }

  return blogPosts.find((post) => post.slug === slug);
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const page = await fetchAdminApi<CarouselPage<AdminBlogListItem>>(
    "/api/public/blogs?limit=100"
  );
  const cmsSlugs = page?.items.map((post) => post.slug) ?? [];
  const localSlugs = blogPosts.map((post) => post.slug);
  return Array.from(new Set([...cmsSlugs, ...localSlugs]));
}
