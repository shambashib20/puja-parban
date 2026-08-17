# PujaParban → Next.js Migration Plan

## Goal
Convert the current static HTML/CSS site into a Next.js (App Router, TypeScript) project with a clean **component / hook / business-logic** layering — **without changing any visual styling**. `styles.css` is carried over verbatim and imported globally; every existing class name is preserved so the DOM output looks pixel-identical.

## Current State (audited)
- `index.html` — 1418 lines, single page, all sections inline (header, hero, booking form, trust bar, priests carousel, how-it-works, services carousel, divine CTA, testimonials slider, blog teaser grid, FAQ accordion, about strip, festivals carousel, footer).
- `blog/*.html` — 4 standalone Bengali blog articles, each duplicating the entire header/footer markup and a small inline script (mobile menu + footer year).
- `styles.css` — 3045 lines, plain CSS with custom properties (`:root` vars), no preprocessor, no CSS modules.
- No JS files — all behavior is inline `<script>` blocks: mobile menu toggle, 4 near-identical scroll-carousels (priests/services/blog/festivals), testimonial auto-slider, FAQ accordion, scroll-spy for nav active state, footer year.
- `assets/` — images/SVGs referenced inconsistently as `assets/x` and `/assets/x` (needs normalizing to Next's `public/` convention).
- `CNAME` → `pujaparban.com`, currently deployed as a static GitHub Pages site. **This drives the Next.js output mode decision.**

## Target Structure

```
app/
  layout.tsx                 # <html>/<head>, imports styles.css, favicon
  page.tsx                   # Home — composes all section components (server component)
  blog/
    [slug]/
      page.tsx               # Dynamic blog detail (generateStaticParams over data)
components/
  layout/
    Header.tsx                # nav + brand, renders MobileMenu + NavLinks
    MobileMenu.tsx             # "use client" — open/close state
    Footer.tsx
  home/
    Hero.tsx
    BookingForm.tsx           # "use client" — controlled form fields
    TrustBar.tsx
    PriestsCarousel.tsx        # "use client" — uses useCarousel hook
    HowItWorks.tsx
    ServicesCarousel.tsx       # "use client"
    DivineCta.tsx
    TestimonialSlider.tsx      # "use client" — uses useTestimonialSlider hook
    BlogTeaserGrid.tsx
    FaqAccordion.tsx           # "use client" — uses useAccordion hook
    AboutStrip.tsx
    FestivalsCarousel.tsx      # "use client"
  blog/
    BlogArticle.tsx            # renders a single article body from data
    BlogBreadcrumb.tsx
  ui/
    NavLink.tsx                 # small shared bits (scroll-spy aware link)
hooks/
  useMobileMenu.ts
  useHorizontalCarousel.ts     # generic — replaces the 4 duplicated scroll functions
  useTestimonialSlider.ts      # autoplay + manual next/prev
  useAccordion.ts              # generic single-open accordion (FAQ)
  useScrollSpy.ts              # active nav link on scroll
lib/                            # business-logic / data layer (no JSX)
  data/
    priests.ts                 # Priest[] — name, photo, rating, experience, specialty
    services.ts                # Service[] — puja types shown in services carousel
    festivals.ts                # Festival[] — upcoming festival cards
    testimonials.ts             # Testimonial[]
    faqs.ts                     # FAQ[]
    blogPosts.ts                 # BlogPost[] — metadata + body content (source for both teaser grid and detail pages)
    navigation.ts                # NavItem[] — single source for header + mobile menu links
  types.ts                     # shared TS interfaces for the above
  constants.ts                 # booking form option lists (puja types, time slots, locations)
public/
  assets/...                   # moved as-is from /assets, all references normalized to root-relative
styles.css                      # moved to app/ (or /styles/styles.css), imported once in layout.tsx — untouched
next.config.js                  # output: 'export', images.unoptimized: true, trailingSlash as needed for GH Pages
```

## Layering Rules
1. **Components** (`components/`) — presentation only. Receive data as props, render the existing markup/classNames 1:1 from the current HTML. No fetch/business logic inside.
2. **Hooks** (`hooks/`) — all the stateful/DOM behavior currently sitting in `<script>` tags (carousel scrolling, slider autoplay, accordion open/close, mobile menu, scroll-spy). Pure, testable, reusable — e.g. one `useHorizontalCarousel(ref)` hook replaces `scrollPriests`, `scrollServices`, `scrollBlogs`, `scrollFestivals`, which are currently four copy-pasted functions.
3. **Business logic / data layer** (`lib/`) — all the hardcoded content currently baked into the HTML (priest list, service list, testimonials, FAQ text, blog post bodies, booking form dropdown options) becomes typed data. Components just map over it. This is also what makes the blog pages a single dynamic route instead of 4 duplicated files.

## Blog Migration Specifics
- Each `blog/<bengali-slug>.html` becomes one entry in `lib/data/blogPosts.ts` (slug, title, thumbnail, breadcrumb label, and body — either as an HTML string rendered via `dangerouslySetInnerHTML` for a 1:1 no-risk port, or restructured into an array of `{heading, paragraphs}` blocks for a slightly cleaner render). Given "don't change styling," the HTML-string approach is the safer first pass.
- Route: `app/blog/[slug]/page.tsx` with `generateStaticParams()` returning all slugs (Bengali slugs are fine — Next handles non-ASCII route segments, matching the current GitHub Pages URLs).
- Shared header/footer markup (currently duplicated in every blog file and index.html) collapses into the one `Header`/`Footer` component.

## Static Export / Deployment
- Because the site is currently deployed as static files to a custom domain via GitHub Pages (`CNAME`), `next.config.js` will use `output: 'export'` and `images: { unoptimized: true }` so `next build` produces the same kind of static `out/` folder GitHub Pages expects. `CNAME` gets copied into `public/` so it lands in the export output.
- No server-only features (API routes, ISR, server actions) will be introduced, keeping deployment identical to today.

## Images
- Recommendation: keep plain `<img>` tags (not `next/image`) for this pass. `next/image` would require explicit width/height and could subtly affect layout/CLS in ways that touch styling — out of scope per your "don't change CSS" constraint. Can be revisited as a later optimization once parity is confirmed.

## Migration Steps
1. Scaffold Next.js + TypeScript app (`create-next-app`, App Router, no Tailwind).
2. Move `assets/` → `public/assets/`; normalize every image path to root-relative (`/assets/...`).
3. Move `styles.css` in unmodified; import once in `app/layout.tsx`.
4. Build the `lib/` data layer by extracting all repeated content (priests, services, testimonials, FAQs, festivals, nav links, booking form options) out of the HTML into typed arrays.
5. Build the 5 hooks, porting the inline `<script>` logic 1:1 (same scroll-amount math, same autoplay interval, same accordion behavior).
6. Build components section-by-section, copying markup/classNames verbatim from `index.html`, wiring props from `lib/data` and behavior from hooks.
7. Assemble `app/page.tsx` from the section components in original order.
8. Port the 4 blog articles into `lib/data/blogPosts.ts` + build `app/blog/[slug]/page.tsx`.
9. Configure `next.config.js` for static export; copy `CNAME` into `public/`.
10. QA pass: run `next dev`, click through every interactive element (mobile menu, all 4 carousels, testimonial autoplay + manual nav, FAQ accordion, scroll-spy, booking form) and visually diff each section against the current live HTML/CSS to confirm zero style drift.
11. `next build` (static export), verify `out/` matches the current file layout expected by GitHub Pages, then cut over.

## Open Decisions (will confirm before implementing)
- Blog body format: raw HTML string (fastest, zero risk) vs. structured content blocks (cleaner, slightly more work) — leaning raw HTML string for parity.
- Whether to keep the placeholder `onclick="alert(...)"` behaviors as-is (Login, Talk to a Priest, Newsletter subscribe, Find Priest) or leave them as TODO handlers for future real logic — leaning keep as-is, just moved into component handlers.
