export function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <img src="/assets/HOW IT WORK 2.svg" alt="" className="how-it-works-bgsvg" aria-hidden="true" />
      <div className="container">
        <div className="how-it-works-head">
          <h2 className="section-title"> </h2>
          <h2 className="priests-title">
            How&nbsp;<span>It Work</span>
          </h2>
          <p className="section-sub">Follow four simple steps to book a trusted priest for your puja.</p>
        </div>
        <div className="how-it-works-layout">
          <div className="hiw-visual">
            <img src="/assets/How_it_work_1.svg" alt="Priests performing a puja ceremony" className="hiw-visual-img" />
          </div>
          <div className="hiw-steps">
            <div className="hiw-step">
              <div className="hiw-step-card">
                <div className="hiw-step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                    <path d="M0 0h20v20H0z" fill="none" />
                    <path
                      fill="currentColor"
                      d="M8.53 3.012q.233-.016.47-.016a7 7 0 0 1 6.984 7.474a.5.5 0 1 0 .998.066q.018-.267.018-.54a8 8 0 0 0-8.536-7.982a.5.5 0 1 0 .066.998M8 4.984a.5.5 0 0 1 .522-.479a6.25 6.25 0 0 1 5.972 5.973a.5.5 0 1 1-.999.043A5.25 5.25 0 0 0 8.48 5.505A.5.5 0 0 1 8 4.984M6.039 16.397l1.11 1.102a.5.5 0 0 0 .704 0l1.135-1.127l1.696-1.689a4.502 4.502 0 1 0-6.367 0c.408.408 1.116 1.113 1.722 1.714M7.5 12.621a1.125 1.125 0 1 1 0-2.25a1.125 1.125 0 0 1 0 2.25"
                    />
                  </svg>
                </div>
                <div className="hiw-step-text">
                  <h4>Select Puja, Date &amp; Time</h4>
                  <p>Choose your puja type, preferred date, and time.</p>
                </div>
                <span className="hiw-step-num">01</span>
              </div>
            </div>

            <div className="hiw-step">
              <div className="hiw-step-card">
                <div className="hiw-step-icon">
                  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="8" r="5" fill="var(--primary)" />
                    <path d="M6 27c0-7 5.4-11 12-11s12 4 12 11" fill="var(--primary)" />
                    <path d="M2 30c4-3 9-4.6 16-4.6s12 1.6 16 4.6" stroke="var(--primary)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div className="hiw-step-text">
                  <h4>Choose Location &amp; Priest</h4>
                  <p>Select your location and preferred verified priest.</p>
                </div>
                <span className="hiw-step-num">02</span>
              </div>
            </div>

            <div className="hiw-step">
              <div className="hiw-step-card">
                <div className="hiw-step-icon">
                  <img src="/assets/house.png" alt="" />
                </div>
                <div className="hiw-step-text">
                  <h4>Complete Payment</h4>
                  <p>Pay securely online to confirm your booking.</p>
                </div>
                <span className="hiw-step-num">03</span>
              </div>
            </div>

            <div className="hiw-step">
              <div className="hiw-step-card">
                <div className="hiw-step-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                      <path d="M15.5 15L14 10.5c-1.657 0-2 1.343-2 3V15m-3.5 0l1.5-4.5c1.657 0 2 1.343 2 3V15"></path>
                      <path d="M21.978 22c-1.15-.67-3.086-2.186-5.69-1.992c-.659.049-.989.074-1.29.05a3 3 0 0 1-.327-.029C13.139 19.674 12 18.336 12 16.74V3.196a1.197 1.197 0 0 1 2.304-.453l2.718 6.644c1.066 2.605 1.599 3.907 2.528 4.577c.057.042.163.113.223.15c.971.606 1.39.606 2.227.606M2.022 22c1.15-.67 3.086-2.186 5.69-1.992c.659.049.989.074 1.29.05s.31-.025.327-.029C10.861 19.675 12 18.336 12 16.74V3.196a1.197 1.197 0 0 0-2.304-.453L6.978 9.388c-1.066 2.605-1.599 3.908-2.528 4.577a5 5 0 0 1-.223.15c-.971.606-1.39.606-2.227.606"></path>
                    </g>
                  </svg>
                </div>
                <div className="hiw-step-text">
                  <h4>Puja at Your Home</h4>
                  <p>The priest arrives and performs the puja at your home.</p>
                </div>
                <span className="hiw-step-num">04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
