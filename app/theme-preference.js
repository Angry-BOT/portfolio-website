export const themeStorageKey = "shailesh-portfolio-theme";
export const darkThemeQuery = "(prefers-color-scheme: dark)";

export function readThemePreference() {
  try {
    const saved = window.localStorage.getItem(themeStorageKey);
    return saved === "light" || saved === "dark" ? saved : null;
  } catch {
    return null;
  }
}

export const initializeTheme = `(() => {
  let saved;
  try {
    saved = localStorage.getItem(${JSON.stringify(themeStorageKey)});
  } catch {}
  document.documentElement.dataset.portfolioTheme =
    saved === "light" || saved === "dark"
      ? saved
      : matchMedia(${JSON.stringify(darkThemeQuery)}).matches ? "dark" : "light";
})();`;
