/**
 * Server-only client for the puja-parban-admin CMS's public API
 * (`/api/public/*` — unauthenticated, published/active content only).
 *
 * Runs in Server Components, so `ADMIN_API_URL` never needs the
 * `NEXT_PUBLIC_` prefix and never reaches the browser.
 */

const ADMIN_API_URL = process.env.ADMIN_API_URL ?? "http://localhost:4000";

export interface CarouselPage<T> {
  items: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    count: number;
    hasNext: boolean;
    hasPrev: boolean;
    nextOffset: number | null;
    prevOffset: number | null;
  };
}

/**
 * Fetches from the admin API, cached at the edge/ISR layer for 60s to match
 * the API's own `Cache-Control: max-age=60`. Returns `null` on any failure
 * (admin backend down, network error, non-2xx) so callers can fall back to
 * bundled placeholder data instead of breaking the page.
 */
export async function fetchAdminApi<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${ADMIN_API_URL}${path}`, {
      next: { revalidate: 60 },
    });
    console.warn(`res`, res);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}
