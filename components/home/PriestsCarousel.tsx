"use client";

import type { Priest } from "@/lib/types";
import { useHorizontalCarousel } from "@/hooks/useHorizontalCarousel";

export function PriestsCarousel({ priests }: { priests: Priest[] }) {
  const { trackRef, scroll } = useHorizontalCarousel({ cardSelector: ".priest-card" });

  return (
    <section className="section section-priests" id="priests">
      <div className="container">
        <div className="priests-layout">
          <div className="priests-intro">
            <h2 className="priests-title">
              Our
              <br />
              <span>Verified Priests</span>
            </h2>
            <p className="priests-sub-en">Trusted experts for every ritual.</p>
            <a href="#" className="priests-viewall">
              View All <span className="chev">›</span>
            </a>
          </div>

          <div className="priests-carousel">
            <button className="priests-nav priests-nav-prev" onClick={() => scroll(-1)} aria-label="Previous priest">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <div className="priests-scroll" ref={trackRef}>
              {priests.map((priest) => (
                <div className="priest-card" key={priest.id}>
                  <div className="priest-img-wrap">
                    <img src={priest.photo} alt={priest.name} className="priest-photo" />
                  </div>
                  <div className="priest-info">
                    <h4>{priest.name}</h4>
                    <div className="priest-rating">
                      <span className="stars">{"★".repeat(priest.rating)}</span>{" "}
                      <span className="rating-num">{priest.ratingLabel}</span>
                      <span className="rating-count">({priest.reviewCount})</span>
                    </div>
                    <p className="priest-exp">{priest.experience}</p>
                    <p className="priest-speciality">
                      <strong>Speciality:</strong> {priest.speciality}
                    </p>
                    <button className="btn-book-puja" onClick={() => alert(`Booking ${priest.name}…`)}>
                      Book a Puja
                    </button>
                    <button
                      className="btn-consult"
                      onClick={() => alert(`Requesting consultation with ${priest.name}…`)}
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="priests-nav priests-nav-next" onClick={() => scroll(1)} aria-label="Next priest">
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
