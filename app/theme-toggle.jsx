"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { darkThemeQuery, readThemePreference, themeStorageKey } from "./theme-preference";

export default function ThemeToggle() {
  const glyph = useRef(null);
  const override = useRef(null);
  const animation = useRef(null);
  const [dark, setDark] = useState(false);

  function applyTheme(mode) {
    document.documentElement.dataset.portfolioTheme = mode;
    setDark(mode === "dark");
  }

  useEffect(() => {
    const system = matchMedia(darkThemeQuery);
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const syncSystem = () => applyTheme(override.current ?? (system.matches ? "dark" : "light"));
    const syncStorage = event => {
      if (event.key !== themeStorageKey && event.key !== null) return;
      override.current = readThemePreference();
      syncSystem();
    };
    const stopAnimation = () => {
      animation.current?.revert();
      animation.current = null;
    };

    override.current = readThemePreference();
    syncSystem();
    system.addEventListener("change", syncSystem);
    window.addEventListener("storage", syncStorage);
    reducedMotion.addEventListener("change", stopAnimation);
    return () => {
      system.removeEventListener("change", syncSystem);
      window.removeEventListener("storage", syncStorage);
      reducedMotion.removeEventListener("change", stopAnimation);
      stopAnimation();
    };
  }, []);

  function toggleTheme() {
    const mode = document.documentElement.dataset.portfolioTheme === "dark" ? "light" : "dark";
    override.current = mode;
    applyTheme(mode);
    try {
      localStorage.setItem(themeStorageKey, mode);
    } catch {
      // Theme switching also works when browser storage is unavailable.
    }
    animation.current?.revert();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    animation.current = gsap.fromTo(glyph.current, {
      rotate: mode === "dark" ? -65 : 65, scale: .58, opacity: .38,
    }, {
      rotate: 0, scale: 1, opacity: 1, duration: .44, ease: "back.out(1.6)", clearProps: "transform,opacity",
    });
  }

  return (
    <button type="button" className="ind-theme-toggle" aria-label="Dark mode" aria-pressed={dark} onClick={toggleTheme}>
      <span className="ind-theme-glyph" ref={glyph} aria-hidden="true">
        <svg className="ind-theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2m0 15v2M2.5 12h2m15 0h2M5.3 5.3l1.4 1.4m10.6 10.6 1.4 1.4m0-13.4-1.4 1.4M6.7 17.3l-1.4 1.4" />
        </svg>
        <svg className="ind-theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.6 15.2A8.7 8.7 0 0 1 9 3.4a8.8 8.8 0 1 0 11.6 11.8Z" />
          <path d="M16.9 3.5v4m-2-2h4" />
        </svg>
      </span>
    </button>
  );
}
