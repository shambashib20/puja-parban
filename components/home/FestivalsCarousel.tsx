"use client";

import { festivals } from "@/lib/data/festivals";
import { useHorizontalCarousel } from "@/hooks/useHorizontalCarousel";

export function FestivalsCarousel() {
  const { trackRef, scroll } = useHorizontalCarousel({
    cardSelector: ".festival-card",
    gap: 16,
    fallbackAmount: 200,
  });

  return (
    <section className="section festival">
      <div className="container-big">
        <div className="festival-wrapper">
          <div className="festival-left">
            <h2 className="festival-heading">
              Upcoming
              <br />
              <span className="highlight">Festivals</span>
            </h2>
            <a href="#" className="festival-btn">
              View Festival Calendar &rarr;
            </a>
          </div>

          <div className="festival-carousel">
            <button className="festival-nav festival-nav-prev" onClick={() => scroll(-1)} aria-label="Previous festival">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="festival-cards" ref={trackRef}>
              {festivals.map((festival) => (
                <div className="festival-card" key={festival.id}>
                  <img src={festival.image} alt={festival.title} className="festival-card-img" />
                  <p className="festival-card-title">{festival.title}</p>
                  <p className="festival-card-subtitle">{festival.subtitle}</p>
                </div>
              ))}
            </div>

            <button className="festival-nav festival-nav-next" onClick={() => scroll(1)} aria-label="Next festival">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
