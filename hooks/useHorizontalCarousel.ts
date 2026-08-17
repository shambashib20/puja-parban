"use client";

import { useRef, type RefObject } from "react";

interface UseHorizontalCarouselOptions {
  /** CSS selector of a single card inside the track, used to measure scroll distance. */
  cardSelector: string;
  /** Gap (px) between cards, added to the measured card width. */
  gap?: number;
  /** Fallback scroll distance (px) if no card is found yet. */
  fallbackAmount?: number;
}

export function useHorizontalCarousel({
  cardSelector,
  gap = 24,
  fallbackAmount = 300,
}: UseHorizontalCarouselOptions): {
  trackRef: RefObject<HTMLDivElement | null>;
  scroll: (direction: 1 | -1) => void;
} {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(cardSelector);
    const amount = card ? card.getBoundingClientRect().width + gap : fallbackAmount;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (direction > 0 && track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction < 0 && track.scrollLeft <= 5) {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    }
  };

  return { trackRef, scroll };
}
