import LanguageSelector from "./LanguageSelector";

export default function Header() {
  return (
    <header className="site-header">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eb4c60" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="announcement-item announcement-item-desktop">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eb4c60" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="announcement-item announcement-item-desktop">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eb4c60" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main-container">
        <div className="header-left">
          {/* Mobile Hamburger Button */}
          <button className="mobile-menu-btn" aria-label="Toggle navigation menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          
          {/* Logo Icon */}
          <a href="#" className="brand-logo-icon" aria-label="Home page">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="20" cy="12" r="8" />
              <circle cx="20" cy="28" r="8" />
              <circle cx="12" cy="20" r="8" />
              <circle cx="28" cy="20" r="8" />
              <rect x="6" y="6" width="28" height="28" rx="2" strokeWidth="1.2" />
            </svg>
          </a>
        </div>

        {/* Center Logo Text */}
        <div className="header-center">
          <a href="#" className="brand-logo-text">LOGO</a>
        </div>

        {/* Right Action Icons & Language Selector */}
        <div className="header-right">
          <button className="icon-btn" aria-label="Search products">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="View wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Shopping cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>

          <button className="icon-btn desktop-only" aria-label="User account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <LanguageSelector />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="header-navigation" aria-label="Main Navigation">
        <ul className="nav-list">
          <li><a href="#shop" className="nav-link active">SHOP</a></li>
          <li><a href="#skills" className="nav-link">SKILLS</a></li>
          <li><a href="#stories" className="nav-link">STORIES</a></li>
          <li><a href="#about" className="nav-link">ABOUT</a></li>
          <li><a href="#contact" className="nav-link">CONTACT US</a></li>
        </ul>
      </nav>

      {/* Mobile Breadcrumb / Sub-header */}
      <div className="mobile-breadcrumb">
        <a href="#">HOME</a>
        <span className="separator">|</span>
        <span>SHOP</span>
      </div>
    </header>
  );
}
