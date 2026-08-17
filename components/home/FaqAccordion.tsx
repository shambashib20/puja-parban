"use client";

import { faqs } from "@/lib/data/faqs";
import { useAccordion } from "@/hooks/useAccordion";

export function FaqAccordion() {
  const { isOpen, toggle } = useAccordion();

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-head">
          <h2 className="section-title">FAQs</h2>
          <p className="section-sub">Clear all your doubts about PujaParban and our services.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.id}>
              <button className={`faq-question${isOpen(faq.id) ? " open" : ""}`} onClick={() => toggle(faq.id)}>
                {faq.question}
                <img className="faq-icon" src="/assets/Vector.svg" alt="" />
              </button>
              <div className={`faq-answer${isOpen(faq.id) ? " open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
