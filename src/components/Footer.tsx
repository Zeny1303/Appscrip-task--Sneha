export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Newsletter & Contact Bar */}
        <div className="footer-top-row">
          <div className="footer-newsletter-col">
            <h2 className="footer-heading">BE THE FIRST TO KNOW</h2>
            <p className="footer-subtext">Sign up for updates from mettä muse.</p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                aria-label="Enter your email for newsletter updates"
                className="newsletter-input"
              />
              <button type="button" className="subscribe-btn" aria-label="Subscribe to newsletter">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <div className="footer-contact-col">
            <div className="contact-block">
              <h2 className="footer-heading">CONTACT US</h2>
              <p className="footer-text-link">+44 221 133 5360</p>
              <p className="footer-text-link">customercare@mettamuse.com</p>
            </div>

            <div className="currency-block">
              <h2 className="footer-heading">CURRENCY</h2>
              <div className="currency-selector">
                <span className="currency-flag" role="img" aria-label="United States flag">🇺🇸</span>
                <span className="currency-code">◆ USD</span>
              </div>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Middle Navigation Links & Social */}
        <div className="footer-middle-row">
          <div className="footer-links-col">
            <h2 className="footer-heading">mettä muse</h2>
            <ul className="footer-nav-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#artisans">Artisans</a></li>
              <li><a href="#boutiques">Boutiques</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#eu-docs">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h2 className="footer-heading">QUICK LINKS</h2>
            <ul className="footer-nav-list">
              <li><a href="#orders">Orders & Shipping</a></li>
              <li><a href="#seller">Join/Login as a Seller</a></li>
              <li><a href="#payment">Payment & Pricing</a></li>
              <li><a href="#returns">Return & Refunds</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-social-col">
            <div className="social-block">
              <h2 className="footer-heading">FOLLOW US</h2>
              <div className="social-icons">
                <a href="#instagram" aria-label="Follow us on Instagram" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#linkedin" aria-label="Follow us on LinkedIn" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="payment-block">
              <h2 className="footer-heading">mettä muse ACCEPTS</h2>
              <div className="payment-badges" aria-label="Accepted payment methods">
                <span className="payment-badge">GPay</span>
                <span className="payment-badge">Mastercard</span>
                <span className="payment-badge">PayPal</span>
                <span className="payment-badge">Amex</span>
                <span className="payment-badge">Apple Pay</span>
                <span className="payment-badge">O Pay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">Copyright &copy; 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
