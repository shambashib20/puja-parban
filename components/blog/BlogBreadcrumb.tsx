import Link from "next/link";

export function BlogBreadcrumb({ label }: { label: string }) {
  return (
    <nav className="blog-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">হোম</Link>
      <span>/</span>
      <Link href="/#blog">ব্লগ</Link>
      <span>/</span>
      <span>{label}</span>
    </nav>
  );
}
