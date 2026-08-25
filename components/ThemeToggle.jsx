"use client";

/**
 * Light/dark appearance toggle, macOS-style.
 *
 * The initial theme is applied before hydration by the inline script in
 * app/layout.jsx (saved preference → system preference). This button simply
 * flips the `dark` class on <html> and persists the choice.
 *
 * Icon visibility is handled purely in CSS (html.dark …), so this component
 * renders identically on server and client — no hydration mismatch.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* private mode — choice just won't persist */
    }
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle light or dark appearance"
      title="Toggle appearance"
    >
      {/* Moon — shown in light mode */}
      <svg
        className="icon-moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
      {/* Sun — shown in dark mode */}
      <svg
        className="icon-sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.5" />
        <line x1="12" y1="1.5" x2="12" y2="3.5" />
        <line x1="12" y1="20.5" x2="12" y2="22.5" />
        <line x1="4.6" y1="4.6" x2="6" y2="6" />
        <line x1="18" y1="18" x2="19.4" y2="19.4" />
        <line x1="1.5" y1="12" x2="3.5" y2="12" />
        <line x1="20.5" y1="12" x2="22.5" y2="12" />
        <line x1="4.6" y1="19.4" x2="6" y2="18" />
        <line x1="18" y1="6" x2="19.4" y2="4.6" />
      </svg>
    </button>
  );
}
