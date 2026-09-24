interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  isOpenMobile = false,
  onCloseMobile,
}: FilterSidebarProps) {
  const accordionSections = [
    { title: "IDEAL FOR", value: "All" },
    { title: "OCCASION", value: "All" },
    { title: "WORK", value: "All" },
    { title: "FABRIC", value: "All" },
    { title: "SEGMENT", value: "All" },
    { title: "SUITABLE FOR", value: "All" },
    { title: "RAW MATERIALS", value: "All" },
    { title: "PATTERN", value: "All" },
  ];

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpenMobile && (
        <div className="mobile-drawer-backdrop" onClick={onCloseMobile} />
      )}

      <aside className={`filter-sidebar ${isOpenMobile ? "mobile-drawer-open" : ""}`} aria-label="Product Filters">
        {/* Mobile Header with Close Button */}
        <div className="mobile-drawer-header">
          <h3>FILTERS</h3>
          <button className="close-drawer-btn" onClick={onCloseMobile} aria-label="Close filters">
            ✕
          </button>
        </div>

        {/* Customizable Checkbox Option */}
        <div className="customizable-option">
          <label className="checkbox-container">
            <input type="checkbox" id="customizable" />
            <span className="checkbox-label">CUSTOMIZABLE</span>
          </label>
        </div>

        {/* Category Filter Section */}
        <div className="filter-group-item category-filter-group">
          <div className="filter-group-header">
            <span className="group-title">CATEGORY</span>
            <span className="selected-category-badge">{selectedCategory === "all" ? "All" : selectedCategory}</span>
          </div>

          <div className="category-options-list">
            <button
              className={`category-option-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => onSelectCategory("all")}
            >
              All Categories
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-option-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => onSelectCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Filter Items */}
        <div className="filter-accordion-list">
          {accordionSections.map((item, index) => (
            <div key={index} className="filter-group-item">
              <div className="filter-group-header">
                <span className="group-title">{item.title}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className="group-status">{item.value}</div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
