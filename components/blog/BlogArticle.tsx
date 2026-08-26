import type { BlogPost } from "@/lib/types";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="blog-detail-body">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
    </article>
  );
}
