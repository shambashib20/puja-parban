import type { BlogPost } from "@/lib/types";

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article className="blog-detail-body">
      <h1>{post.title}</h1>
      {post.body.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "h2") {
          return <h2 key={index}>{block.text}</h2>;
        }
        if (block.type === "h3") {
          return <h3 key={index}>{block.text}</h3>;
        }
        return (
          <ul key={index}>
            {block.items?.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        );
      })}
    </article>
  );
}
