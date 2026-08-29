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

// Render's free tier sleeps the admin API after inactivity and can take
// 30-60s to wake back up. That's longer than Vercel's serverless function
// timeout, so an asleep backend must not be allowed to hang the page
// render - bail out well under the platform timeout and fall back instead.
const FETCH_TIMEOUT_MS = 8_000;

/**
 * Fetches from the admin API with no caching - every call hits the admin
 * backend fresh, so a newly published/unpublished blog or priest is live on
 * the next page load with no cache window to wait out. Returns `null` on
 * any failure (admin backend down, slow/asleep, network error, non-2xx) so
 * callers can fall back to bundled placeholder data instead of breaking
 * the page.
 */
export async function fetchAdminApi<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${ADMIN_API_URL}${path}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}
