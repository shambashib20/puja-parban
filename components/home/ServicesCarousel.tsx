"use client";

import { services, type ServiceItem } from "@/lib/data/services";
import { useHorizontalCarousel } from "@/hooks/useHorizontalCarousel";

function EventIcon({ variant }: { variant: ServiceItem["iconVariant"] }) {
  if (variant === "a") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10.74 12.25L12 9.5l1.25 2.75L16 13.5l-2.75 1.26L12 17.5l-1.26-2.74L8 13.5zM16 3V1h2v2h1c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-.53.21-1.04.59-1.41C3.96 3.21 4.47 3 5 3h1V1h2v2zM5 8v11h14V8z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9.5h18" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 14.2l2 2 4-4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon({ variant }: { variant: ServiceItem["iconVariant"] }) {
  if (variant === "a") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M10.115 21.811c.606.5 1.238.957 1.885 1.403a27 27 0 0 0 1.885-1.403a28 28 0 0 0 2.853-2.699C18.782 16.877 21 13.637 21 10a9 9 0 1 0-18 0c0 3.637 2.218 6.876 4.262 9.112a28 28 0 0 0 2.853 2.7M12 13.25a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M12 21s7-7.1 7-12a7 7 0 10-14 0c0 4.9 7 12 7 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function AvailabilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7.5" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 20c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function scrollToBooking() {
  document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
}

export function ServicesCarousel() {
  const { trackRef, scroll } = useHorizontalCarousel({ cardSelector: ".service-card" });

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="services-head">
          <h2 className="priests-title">
            Our&nbsp;<span>Service</span>
          </h2>
        </div>

        <div className="services-carousel">
          <button className="services-nav services-nav-prev" onClick={() => scroll(-1)} aria-label="Previous service">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="services-scroll" ref={trackRef}>
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-card-img">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-card-body">
                  <h3 className="service-card-title">{service.title}</h3>
                  <ul className="service-card-meta">
                    <li>
                      <span className="meta-icon">
                        <EventIcon variant={service.iconVariant} />
                      </span>
                      <span>
                        <strong>Event:</strong> {service.event}
                      </span>
                    </li>
                    <li>
                      <span className="meta-icon">
                        <LocationIcon variant={service.iconVariant} />
                      </span>
                      <span>
                        <strong>Location:</strong> {service.location}
                      </span>
                    </li>
                    <li>
                      <span className="meta-icon">
                        <AvailabilityIcon />
                      </span>
                      <span>Available for Booking</span>
                    </li>
                  </ul>
                  <hr className="service-card-divider" />
                  <p className="service-card-desc">{service.description}</p>
                  <button className="btn-book-service" onClick={scrollToBooking}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="services-nav services-nav-next" onClick={() => scroll(1)} aria-label="Next service">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
