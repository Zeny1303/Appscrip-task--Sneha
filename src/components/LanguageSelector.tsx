"use client";

import { useState, useRef, useEffect } from "react";

interface LanguageOption {
  code: string;
  label: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "ENG", label: "English (ENG)" },
  { code: "HIN", label: "Hindi (हिंदी)" },
  { code: "KAN", label: "Kannada (ಕನ್ನಡ)" },
  { code: "TEL", label: "Telugu (తెలుగు)" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle option select
  const handleSelect = (lang: LanguageOption) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-wrapper" ref={dropdownRef}>
      <button
        className="language-selector-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        type="button"
      >
        <span>{selectedLanguage.code}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`lang-chevron ${isOpen ? "open" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <ul className="language-dropdown-menu" role="listbox" aria-label="Languages">
          {LANGUAGES.map((lang) => (
            <li
              key={lang.code}
              role="option"
              aria-selected={selectedLanguage.code === lang.code}
              className={`language-option-item ${selectedLanguage.code === lang.code ? "selected" : ""}`}
              onClick={() => handleSelect(lang)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(lang);
                }
              }}
              tabIndex={0}
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
