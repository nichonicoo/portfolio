/* ═══════════════════════════════════════
   TYPING.JS — Typewriter Effect
   ═══════════════════════════════════════ */

(function () {
  'use strict';

  const typingText = document.getElementById('typingText');
  if (!typingText) return;

  const lines = window.portfolioData?.typingLines || [
    'turning caffeine into code ☕',
    'designing for delight ✨',
    'shipping quality software 🚀',
    'learning something new every day 📚',
    'building in the open 🌱',
  ];

  let lineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  const TYPING_SPEED = 50;        // ms per char when typing
  const DELETING_SPEED = 25;      // ms per char when deleting
  const PAUSE_BEFORE_DELETE = 2000; // ms pause when line is complete
  const PAUSE_BEFORE_NEXT = 500;    // ms pause after delete before next line

  function typeEffect() {
    if (isPaused) return;

    const currentLine = lines[lineIndex];

    if (!isDeleting) {
      // Typing
      charIndex++;
      typingText.textContent = currentLine.substring(0, charIndex);

      if (charIndex === currentLine.length) {
        // Finished typing a line — pause before deleting
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          typeEffect();
        }, PAUSE_BEFORE_DELETE);
        return;
      }

      setTimeout(typeEffect, TYPING_SPEED);
    } else {
      // Deleting
      charIndex--;
      typingText.textContent = currentLine.substring(0, charIndex);

      if (charIndex === 0) {
        // Finished deleting — move to next line
        isPaused = true;
        isDeleting = false;
        lineIndex = (lineIndex + 1) % lines.length;

        setTimeout(() => {
          isPaused = false;
          typeEffect();
        }, PAUSE_BEFORE_NEXT);
        return;
      }

      setTimeout(typeEffect, DELETING_SPEED);
    }
  }

  // Start the typing effect
  setTimeout(typeEffect, 1000);
})();
