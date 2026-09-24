import { SortOption } from "@/types/product";

interface FilterBarProps {
  totalItems: number;
  showFilter: boolean;
  onToggleFilter: () => void;
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  onToggleMobileFilter: () => void;
}

export default function FilterBar({
  totalItems,
  showFilter,
  onToggleFilter,
  sortOption,
  onSortChange,
  onToggleMobileFilter,
}: FilterBarProps) {
  return (
    <div className="filter-bar-container">
      <div className="filter-bar-left">
        <span className="items-count-text">{totalItems} ITEMS</span>
        
        <button 
          className="filter-toggle-btn" 
          onClick={onToggleFilter}
          aria-label={showFilter ? "Hide Sidebar Filters" : "Show Sidebar Filters"}
        >
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className={`toggle-chevron ${showFilter ? "chevron-left" : "chevron-right"}`}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span className="filter-toggle-label">
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </button>
      </div>

      <div className="mobile-filter-trigger">
        <button onClick={onToggleMobileFilter} className="mobile-filter-btn">
          FILTER
        </button>
      </div>

      <div className="filter-bar-right">
        <div className="sort-wrapper">
          <select 
            className="sort-dropdown" 
            aria-label="Sort products"
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="price-high-low">PRICE : HIGH TO LOW</option>
            <option value="price-low-high">PRICE : LOW TO HIGH</option>
          </select>
          <svg className="sort-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
}
