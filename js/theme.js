/* ═══════════════════════════════════════
   THEME.JS — Dark / Light Mode Toggle
   ═══════════════════════════════════════ */

(function () {
  'use strict';

  const STORAGE_KEY = 'threadsfolio-theme';

  /**
   * Get the stored theme or fall back to system preference
   */
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  /**
   * Apply theme to the document
   */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /**
   * Toggle between dark and light
   */
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // ─── Init ───
  const theme = getPreferredTheme();
  applyTheme(theme);

  // ─── Listen for toggle button ───
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }

  // ─── Listen for system preference changes ───
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    // Only auto-switch if user hasn't explicitly set a preference
    if (!stored) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
