"use client";

import { testimonials } from "@/lib/data/testimonials";
import { useTestimonialSlider } from "@/hooks/useTestimonialSlider";

export function TestimonialSlider() {
  const { currentSlide, nextSlide, prevSlide } = useTestimonialSlider(testimonials.length);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <h2 className="priests-title">
            Trusted by Families Across&nbsp;<span>West Bengal</span>
          </h2>
          <p className="testimonials-sub">
            Bringing tradition, trust, and convenience together through verified priest booking services.
          </p>
          <div className="testimonials-trust">
            <img src="/assets/review member.png" alt="Our verified priests" className="testimonials-trust-avatars" />
            <p className="testimonials-trust-line1">100+ Verified Priests Across West Bengal</p>
            <p className="testimonials-trust-line2">50+ Successful Bookings Completed</p>
          </div>
        </div>

        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-card"
              key={testimonial.id}
              style={{
                display: index === currentSlide ? "flex" : "none",
                backgroundImage: "url('/assets/castomar say background.svg')",
              }}
            >
              <div className="testimonial-photo">
                <img src={testimonial.photo} alt={testimonial.author.replace(/^-\s*/, "")} />
              </div>
              <div className="testimonial-body">
                <div className="testimonial-quote-row">
                  <span className="testimonial-quote-mark">
                    <svg viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 36V22.2C0 9.4 7.5 1.1 18.7 0v7.6c-5.6 1.3-8.7 5-8.7 9.9h8.7V36H0Z" fill="currentColor" />
                      <path d="M26.7 36V22.2c0-12.8 7.5-21.1 18.7-22.2v7.6c-5.6 1.3-8.7 5-8.7 9.9h8.7V36H26.7Z" fill="currentColor" />
                    </svg>
                  </span>
                  <h3 className="testimonial-heading">
                    What Our <span>Customers Say</span>
                  </h3>
                </div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            </div>
          ))}

          <button className="testimonial-nav testimonial-nav-prev" onClick={prevSlide} aria-label="Previous testimonial">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="testimonial-nav testimonial-nav-next" onClick={nextSlide} aria-label="Next testimonial">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
