"use client";

import { BookingForm } from "./BookingForm";

function scrollToBooking() {
  document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">আপনার পূজার</h1>
            <h1 className="hero-title">
              <span>বিশ্বস্ত পুরোহিত,</span>এখন এক ক্লিকে
            </h1>
            <p className="hero-subtitle">
              বাড়িতে, অফিসে বা বিশেষ অনুষ্ঠানে পূজার জন্য
              <span className="highlight"> অভিজ্ঞ ও যাচাইকৃত পুরোহিত বুক করুন</span> সহজেই।
            </p>
            <div className="hero-trust">
              <div className="hero-trust-item">
                <img src="/assets/verified.svg" alt="" />
                <span>Verified Priests</span>
              </div>
              <div className="hero-trust-item">
                <img src="/assets/ontime.svg" alt="" />
                <span>On-Time Service</span>
              </div>
              <div className="hero-trust-item">
                <img src="/assets/secure.svg" alt="" />
                <span>Secure Payment</span>
              </div>
            </div>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToBooking}>
                <img src="/assets/primary-icon.png" alt="" /> Book a Priest Now
              </button>
              <button className="btn btn-outline-white" onClick={() => alert("Connecting you to our team…")}>
                <svg className="btn-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>{" "}
                Talk to a Priest
              </button>
            </div>
          </div>

          <img src="/assets/purohit_1.png" alt="Verified Priest" className="hero-priest-img" />

          <BookingForm />
        </div>
      </div>
    </section>
  );
}
