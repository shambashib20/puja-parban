"use client";

function scrollToBooking() {
  document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
}

export function DivineCta() {
  return (
    <section className="divine-cta">
      <img src="/assets/Mahamantra left.svg" alt="" className="divine-mahamantra divine-mahamantra-left" aria-hidden="true" />
      <img src="/assets/Mahamantra right.svg" alt="" className="divine-mahamantra divine-mahamantra-right" aria-hidden="true" />
      <div className="container">
        <div className="divine-cta-grid">
          <div>
            <p className="divine-eyebrow">Spiritual Experience</p>
            <h2 className="divine-title">
              Experience the Divine Power of the
              <br />
              <span>Hare Krishna Mahamantra</span>
            </h2>
            <p className="divine-desc">
              Experience the spiritual power of the Hare Krishna Mahamantra and connect with divine consciousness
              through sacred chanting. Let every chant fill your heart with peace, devotion, and eternal bliss.
            </p>
            <div className="divine-actions">
              <button className="btn btn-primary" onClick={scrollToBooking}>
                Start Chanting Now
              </button>
            </div>
          </div>
          <div className="divine-cta-image">
            <img src="/assets/Krishna image.svg" alt="Lord Krishna" className="divine-krishna-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
