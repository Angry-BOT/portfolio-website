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
    <button type="button" className="ind-theme-toggle" aria-label="Dark mode" aria-pressed={dark} title={dark ? "Switch to light mode" : "Switch to dark mode"} onClick={toggleTheme}>
      <span className="ind-theme-glyph" ref={glyph} aria-hidden="true">
        <svg className="ind-theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="12" cy="12" r="4.1" fill="currentColor" fillOpacity=".18" />
          <path d="M12 2.7v2m0 14.6v2M2.7 12h2m14.6 0h2M5.4 5.4l1.4 1.4m10.4 10.4 1.4 1.4m0-13.2-1.4 1.4M6.8 17.2l-1.4 1.4" />
        </svg>
        <svg className="ind-theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
          <path d="M20.9 14.2A8.6 8.6 0 0 1 9.8 3.1a9 9 0 1 0 11.1 11.1Z" fill="currentColor" fillOpacity=".2" />
          <path d="m16.7 3.1.8 2.3 2.3.8-2.3.8-.8 2.3-.8-2.3-2.3-.8 2.3-.8Z" fill="currentColor" stroke="none" />
        </svg>
      </span>
    </button>
  );
}
