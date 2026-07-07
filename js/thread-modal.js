/* ═══════════════════════════════════════
   THREAD-MODAL.JS — Open/Close Thread Detail
   ═══════════════════════════════════════ */

(function () {
  'use strict';

  const overlay = document.getElementById('threadOverlay');
  const modalBody = document.getElementById('threadModalBody');
  const closeBtn = document.getElementById('threadModalClose');

  if (!overlay || !modalBody || !closeBtn) return;

  /**
   * Build the thread detail HTML from data
   */
  function buildThreadHTML(threadId) {
    const data = window.portfolioData?.threadDetails?.[threadId];
    if (!data) return '<p class="thread-detail__intro">Thread not found.</p>';

    const tasksHTML = data.tasks
      .map(
        (task, i) => {
          const gallery = task.images && task.images.length > 0
            ? `<div class="gallery">
                 <div class="gallery__track">
                   ${task.images.map((img) => `<img src="${img}" alt="${task.title}" class="gallery__img" />`).join('')}
                 </div>
               </div>`
            : '';

          return `
      <div class="thread-task">
        <div class="thread-task__line">
          <div class="thread-task__dot"></div>
          <div class="thread-task__connector"></div>
        </div>
        <div class="thread-task__body">
          <div class="thread-task__title-row">
            <span class="thread-task__title">${task.title}</span>
            <span class="thread-task__type">${task.type}</span>
          </div>
          <p class="thread-task__desc">${task.description}</p>
          ${gallery}
          <ul class="thread-task__details">
            ${task.details.map((d) => `<li>${d}</li>`).join('')}
          </ul>
          <div class="thread-task__skills">
            ${task.skills.map((s) => `<span class="chip chip--sm">${s}</span>`).join('')}
          </div>
        </div>
      </div>`;
        }
      )
      .join('');

    const logoMap = {
      'JAPFA': 'assets/jpfa.png',
    };
    const logo = logoMap[data.company] || 'assets/avatar.svg';

    return `
      <div class="thread-detail">
        <div class="thread-detail__header">
          <img src="${logo}" alt="${data.company}" class="thread-detail__avatar" />
          <div class="thread-detail__info">
            <h2>${data.role}</h2>
            <p>${data.company} · ${data.period}</p>
          </div>
        </div>
        <p class="thread-detail__intro">${data.intro}</p>
        ${tasksHTML}
      </div>
    `;
  }

  /**
   * Open the modal for a given thread
   */
  function openThread(threadId) {
    const html = buildThreadHTML(threadId);
    modalBody.innerHTML = html;
    overlay.classList.add('thread-overlay--open');
    document.body.style.overflow = 'hidden';

    // Re-init Lucide icons inside modal
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  /**
   * Close the modal
   */
  function closeThread() {
    overlay.classList.remove('thread-overlay--open');
    document.body.style.overflow = '';
  }

  // ─── Close button ───
  closeBtn.addEventListener('click', closeThread);

  // ─── Click overlay background to close ───
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeThread();
  });

  // ─── Escape key to close ───
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeThread();
  });

  // ─── Expose open function globally ───
  window.openThreadModal = openThread;

  // ─── Listen for clicks on thread open buttons & clickable threads ───
  function initThreadTriggers() {
    document.querySelectorAll('.thread__open-btn, .sidebar__pinned-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-thread-id');
        if (id) openThread(id);
      });
    });

    document.querySelectorAll('.thread--clickable').forEach((el) => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-thread-id');
        if (id) openThread(id);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreadTriggers);
  } else {
    initThreadTriggers();
  }
})();
