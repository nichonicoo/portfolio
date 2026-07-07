/* ═══════════════════════════════════════
   NAVIGATION.JS — Continue Thread & Smooth Nav
   ═══════════════════════════════════════ */

(function () {
  'use strict';

  /**
   * Smooth scroll to an element
   */
  function scrollToElement(targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /**
   * Init "Continue this thread" buttons
   */
  function initContinueThreadButtons() {
    const buttons = document.querySelectorAll('.continue-thread__btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target) {
          scrollToElement(target);
        }
      });
    });
  }

  /**
   * Init "Back to top" button
   */
  function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Init profile tab navigation
   */
  function initProfileTabs() {
    const tabs = document.querySelectorAll('.profile__tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // Update active tab
        tabs.forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        // Scroll to target section
        const target = tab.getAttribute('data-target');
        if (target) {
          scrollToElement(target);
        }
      });
    });
  }

  /**
   * Init sidebar Quick Links
   */
  function initSidebarLinks() {
    document.querySelectorAll('.sidebar__link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        if (target) scrollToElement(target);
      });
    });

    // Pinned "Open" button → open thread modal
    document.querySelectorAll('.sidebar__pinned-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-thread-id');
        if (id && window.openThreadModal) {
          window.openThreadModal(id);
        }
      });
    });
  }

  // ─── Init on DOM ready ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initContinueThreadButtons();
      initBackToTop();
      initProfileTabs();
      initSidebarLinks();
    });
  } else {
    initContinueThreadButtons();
    initBackToTop();
    initProfileTabs();
    initSidebarLinks();
  }
})();
