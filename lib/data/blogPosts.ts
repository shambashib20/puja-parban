import DOMPurify from "isomorphic-dompurify";
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

interface FallbackBlogBlock {
  type: "p" | "h2" | "h3" | "ul";
  text?: string;
  items?: string[];
}

interface FallbackBlogPost extends BlogPostSummary {
  lang: "bn" | "en";
  breadcrumbLabel: string;
  body: FallbackBlogBlock[];
}

const blogPosts = rawBlogPosts as FallbackBlogPost[];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function fallbackBlocksToHtml(blocks: FallbackBlogBlock[]): string {
  return blocks
    .map((block) => {
      if (block.type === "ul") {
        const items = (block.items ?? [])
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("");
        return `<ul>${items}</ul>`;
      }
      return `<${block.type}>${escapeHtml(block.text ?? "")}</${block.type}>`;
    })
    .join("");
}

function toFullBlogPost(post: FallbackBlogPost): BlogPost {
  const { body, ...rest } = post;
  return { ...rest, bodyHtml: fallbackBlocksToHtml(body) };
}

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

/**
 * The CMS editor already produces well-formed HTML (h1/h2/h3/p/ul/table/hr/...).
 * Sanitize it and render it as-is so every tag renders as its own element
 * instead of being flattened into plain paragraphs.
 */
function sanitizeBodyHtml(html: string): string {
  const clean = DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ["target", "rel"],
  });
  // The article shell already renders the post title as the page's <h1>;
  // drop a leading <h1> from the CMS body so the title isn't duplicated.
  return clean.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/i, "");
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts.map(toFullBlogPost);
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
    const bodyHtml = post.bodyEn || post.bodyBn || "";
    return {
      slug: post.slug,
      title,
      excerpt: post.excerptEn || post.excerptBn || "",
      thumbnail: post.coverImageUrl || "/assets/blogs/1.png",
      imageAlt: title,
      lang: post.bodyEn ? "en" : "bn",
      breadcrumbLabel: title,
      bodyHtml: sanitizeBodyHtml(bodyHtml),
    };
  }

  const fallback = blogPosts.find((post) => post.slug === slug);
  return fallback ? toFullBlogPost(fallback) : undefined;
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const page = await fetchAdminApi<CarouselPage<AdminBlogListItem>>(
    "/api/public/blogs?limit=100"
  );
  const cmsSlugs = page?.items.map((post) => post.slug) ?? [];
  const localSlugs = blogPosts.map((post) => post.slug);
  return Array.from(new Set([...cmsSlugs, ...localSlugs]));
}
