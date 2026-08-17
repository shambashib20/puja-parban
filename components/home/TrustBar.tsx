export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item">
            <img src="/assets/Floating Guru.png" alt="" />
            <div>
              <h4>Trusted &amp; Verified</h4>
              <p>Verified &amp; Experienced Priests</p>
            </div>
          </div>
          <div className="trust-item">
            <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
              <path d="M0 0h20v20H0z" fill="none" />
              <path
                fill="currentColor"
                d="M8.53 3.012q.233-.016.47-.016a7 7 0 0 1 6.984 7.474a.5.5 0 1 0 .998.066q.018-.267.018-.54a8 8 0 0 0-8.536-7.982a.5.5 0 1 0 .066.998M8 4.984a.5.5 0 0 1 .522-.479a6.25 6.25 0 0 1 5.972 5.973a.5.5 0 1 1-.999.043A5.25 5.25 0 0 0 8.48 5.505A.5.5 0 0 1 8 4.984M6.039 16.397l1.11 1.102a.5.5 0 0 0 .704 0l1.135-1.127l1.696-1.689a4.502 4.502 0 1 0-6.367 0c.408.408 1.116 1.113 1.722 1.714M7.5 12.621a1.125 1.125 0 1 1 0-2.25a1.125 1.125 0 0 1 0 2.25"
              />
            </svg>
            <div>
              <h4>Live Tracking</h4>
              <p>Real-Time Booking Updates</p>
            </div>
          </div>
          <div className="trust-item">
            <svg className="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <div>
              <h4>Transparent Pricing</h4>
              <p>No Hidden Charges</p>
            </div>
          </div>
          <div className="trust-item">
            <svg className="trust-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2m1 14.5h-2v-2h2zm.4-4.78c-.01.01-.02.03-.03.05c-.05.08-.1.16-.14.24c-.02.03-.03.07-.04.11c-.03.07-.06.14-.08.21c-.07.21-.1.43-.1.68H10.5c0-.51.08-.94.2-1.3c0-.01 0-.02.01-.03c.01-.04.04-.06.05-.1c.06-.16.13-.3.22-.44c.03-.05.07-.1.1-.15c.03-.04.05-.09.08-.12l.01.01c.84-1.1 2.21-1.44 2.32-2.68c.09-.98-.61-1.93-1.57-2.13c-1.04-.22-1.98.39-2.3 1.28c-.14.36-.47.65-.88.65h-.2c-.6 0-1.04-.59-.87-1.17a4 4 0 0 1 4.43-2.79c1.69.25 3.04 1.64 3.33 3.33c.44 2.44-1.63 3.03-2.53 4.35"
              />
            </svg>
            <div>
              <h4>24/7 Support</h4>
              <p>Support Anytime, Anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
