"use client";

import { useState } from "react";

export default function Footer() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    mettamuse: false,
    quicklinks: false,
    followus: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-container">
        {/* Top Newsletter & Contact/Currency Bar */}
        <div className="footer-top-row">
          <div className="footer-newsletter-col">
            <h2 className="footer-heading">BE THE FIRST TO KNOW</h2>
            <p className="footer-subtext">Sign up for updates from mettä muse.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                aria-label="Enter your email for newsletter updates"
                className="newsletter-input"
              />
              <button type="submit" className="subscribe-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="footer-contact-col">
            <div className="contact-block">
              <h2 className="footer-heading">CALL US</h2>
              <div className="contact-info-line">
                <span>+44 221 133 5360</span>
                <span className="contact-bullet">◆</span>
                <span>customercare@mettamuse.com</span>
              </div>
            </div>

            <div className="currency-block">
              <h2 className="footer-heading">CURRENCY</h2>
              <div className="currency-selector">
                <img src="/us-flag.svg" alt="United States flag" className="currency-flag-img" width="18" height="18" />
                <span className="currency-code">◆ USD</span>
              </div>
              <p className="currency-note desktop-only">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Middle Links & Mobile Accordions */}
        <div className="footer-middle-row">
          {/* 1. mettä muse */}
          <div className="footer-links-col">
            <button
              type="button"
              className="footer-accordion-btn"
              onClick={() => toggleSection("mettamuse")}
              aria-expanded={openSections.mettamuse}
            >
              <h2 className="footer-heading">mettā muse</h2>
              <svg
                className={`accordion-chevron ${openSections.mettamuse ? "open" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul className={`footer-nav-list ${openSections.mettamuse ? "open" : ""}`}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#artisans">Artisans</a></li>
              <li><a href="#boutiques">Boutiques</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#eu-docs">EU Compliances Docs</a></li>
            </ul>
          </div>

          {/* 2. QUICK LINKS */}
          <div className="footer-links-col">
            <button
              type="button"
              className="footer-accordion-btn"
              onClick={() => toggleSection("quicklinks")}
              aria-expanded={openSections.quicklinks}
            >
              <h2 className="footer-heading">QUICK LINKS</h2>
              <svg
                className={`accordion-chevron ${openSections.quicklinks ? "open" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul className={`footer-nav-list ${openSections.quicklinks ? "open" : ""}`}>
              <li><a href="#orders">Orders & Shipping</a></li>
              <li><a href="#seller">Join/Login as a Seller</a></li>
              <li><a href="#payment">Payment & Pricing</a></li>
              <li><a href="#returns">Return & Refunds</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* 3. FOLLOW US & Payment */}
          <div className="footer-social-col">
            <div className="social-block">
              <button
                type="button"
                className="footer-accordion-btn"
                onClick={() => toggleSection("followus")}
                aria-expanded={openSections.followus}
              >
                <h2 className="footer-heading">FOLLOW US</h2>
                <svg
                  className={`accordion-chevron ${openSections.followus ? "open" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div className={`social-icons-wrapper ${openSections.followus ? "open" : ""}`}>
                <div className="social-icons">
                  <a href="#instagram" aria-label="Instagram" className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="payment-block">
              <h2 className="footer-heading">mettā muse ACCEPTS</h2>
              <div className="payment-badges" aria-label="Accepted payment methods">
                {/* 1. Google Pay */}
                <span className="payment-badge-svg" title="Google Pay">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="3" fill="#FFFFFF" />
                    <path d="M14.5 12.3c0-.4 0-.8-.1-1.2H9.5v2.2h2.8c-.1.7-.5 1.4-1.1 1.8v1.5h1.8c1.1-1 1.7-2.5 1.7-4.3z" fill="#4285F4" />
                    <path d="M9.5 17.4c2.1 0 3.9-.7 5.2-1.9l-1.8-1.5c-.7.5-1.6.8-2.6.8-2 0-3.7-1.4-4.3-3.2H4.1v1.5c1.3 2.6 4 4.3 7.1 4.3z" fill="#34A853" />
                    <path d="M5.2 11.6c-.2-.5-.2-1.1-.2-1.6 0-.6.1-1.1.2-1.6V6.9H4.1C3.4 8.2 3 9.8 3 11.6c0 1.8.4 3.4 1.1 4.7l1.1-1.5z" fill="#FBBC05" />
                    <path d="M9.5 5.8c1.2 0 2.2.4 3 1.1l2.3-2.3C13.4 3.3 11.6 2.5 9.5 2.5 6.4 2.5 3.7 4.2 2.4 6.9l2.8 1.5c.6-1.8 2.3-3.2 4.3-3.2z" fill="#EA4335" />
                    <text x="17" y="16" fontFamily="Arial" fontWeight="bold" fontSize="11" fill="#5F6368">Pay</text>
                  </svg>
                </span>

                {/* 2. Mastercard */}
                <span className="payment-badge-svg" title="Mastercard">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="3" fill="#FFFFFF" />
                    <circle cx="15" cy="12" r="7" fill="#EB001B" />
                    <circle cx="23" cy="12" r="7" fill="#F79E1B" fillOpacity="0.9" />
                  </svg>
                </span>

                {/* 3. PayPal */}
                <span className="payment-badge-svg" title="PayPal">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="3" fill="#FFFFFF" />
                    <path d="M14 6h6c2.5 0 4 1.2 3.5 3.5-.5 2.5-2.2 4.5-5 4.5h-2.2l-1 5H12l2-13z" fill="#003087" />
                    <path d="M17 9h5c2 0 3.2 1 2.8 3-.4 2-1.8 3.5-4 3.5h-2l-1 5H15l2-11.5z" fill="#0079C1" fillOpacity="0.8" />
                  </svg>
                </span>

                {/* 4. Amex */}
                <span className="payment-badge-svg" title="American Express">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="3" fill="#006FCF" />
                    <text x="20" y="15" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="8" fill="#FFFFFF">AMEX</text>
                  </svg>
                </span>

                {/* 5. Apple Pay */}
                <span className="payment-badge-svg" title="Apple Pay">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="3" fill="#FFFFFF" />
                    <path d="M14.2 12.2c0-1.5 1.2-2.2 1.3-2.3-.7-1-1.8-1.1-2.2-1.1-1-.1-1.9.6-2.4.6-.5 0-1.3-.6-2.1-.6-1.1 0-2.1.6-2.6 1.6-1.1 2-.3 4.9.8 6.4.5.8 1.2 1.6 2 1.6.8 0 1.1-.5 2.1-.5 1 0 1.3.5 2.1.5.9 0 1.4-.8 2-1.6.6-.9.9-1.8.9-1.9 0 0-1.9-.7-1.9-2.7zM12.4 7.6c.4-.5.7-1.2.6-2-.6 0-1.4.4-1.8.9-.4.4-.7 1.2-.6 1.9.7.1 1.4-.3 1.8-.8z" fill="#000000" />
                    <text x="18" y="16" fontFamily="Arial" fontWeight="bold" fontSize="10" fill="#000000">Pay</text>
                  </svg>
                </span>

                {/* 6. O Pay */}
                <span className="payment-badge-svg" title="O Pay">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <rect width="40" height="24" rx="3" fill="#5A31F4" />
                    <text x="20" y="15" textAnchor="middle" fontFamily="Arial" fontWeight="bold" fontSize="9" fill="#FFFFFF">O Pay</text>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom-row">
          <p className="copyright-text">Copyright &copy; 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
