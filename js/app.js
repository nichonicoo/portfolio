/* ═══════════════════════════════════════
   APP.JS — Main Application Entry Point
   ═══════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Scroll Progress Bar ───
  function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    if (!progressBar) return;

    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ─── Lucide Icons ───
  function initLucide() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }

  // ─── GSAP Animations ───
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate posts on scroll
    const posts = document.querySelectorAll('.post');
    posts.forEach((post) => {
      gsap.fromTo(
        post,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: post,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate thread items
    const threads = document.querySelectorAll('.thread');
    threads.forEach((thread, i) => {
      gsap.fromTo(
        thread,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: thread,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline__item');
    timelineItems.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate skill categories
    const skillCats = document.querySelectorAll('.skills-category');
    skillCats.forEach((cat, i) => {
      gsap.fromTo(
        cat,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: i * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cat,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate certificate cards
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach((link, i) => {
      gsap.fromTo(
        link,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: link,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Animate "Continue thread" buttons
    const continueBtns = document.querySelectorAll('.continue-thread');
    continueBtns.forEach((btn) => {
      gsap.fromTo(
        btn,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: btn,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Hero entrance animation
    const hero = document.querySelector('.post--hero');
    if (hero) {
      gsap.fromTo(
        hero,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }

    // Refresh ScrollTrigger after layout settles
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }

  // ─── Like button interaction ───
  function initLikeButtons() {
    document.querySelectorAll('.post__action:nth-child(3)').forEach((btn) => {
      btn.addEventListener('click', function () {
        const icon = this.querySelector('svg');
        const countSpan = this.querySelector('span');
        if (!countSpan) return;

        const isLiked = this.dataset.liked === 'true';
        this.dataset.liked = isLiked ? 'false' : 'true';

        let count = parseInt(countSpan.textContent, 10);

        if (!isLiked) {
          count++;
          this.style.color = 'var(--heart-color)';
          icon.style.setProperty('fill', 'var(--heart-color)', 'important');
        } else {
          count--;
          this.style.color = '';
          icon.style.fill = 'none';
        }

        countSpan.textContent = count;
      });
    });
  }

  // ─── Share button ───
  function initShareButtons() {
    document.querySelectorAll('.post__action:nth-child(4)').forEach((btn) => {
      btn.addEventListener('click', async function () {
        const url = window.location.href;
        const title = document.title || 'Nicholas Terrence Salim — Portfolio';

        if (navigator.share) {
          try {
            await navigator.share({ title, url });
          } catch (e) {
            // User cancelled
          }
        } else {
          // Fallback: copy to clipboard
          try {
            await navigator.clipboard.writeText(url);
            const original = this.innerHTML;
            this.innerHTML = `<i data-lucide="check"></i>`;
            lucide.createIcons();
            setTimeout(() => {
              this.innerHTML = original;
              lucide.createIcons();
            }, 2000);
          } catch (e) {
            // Fallback
          }
        }
      });
    });
  }

  // ─── Lightbox (Image Popup) ───
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (!lightbox || !lightboxImg) return;

    let currentImages = [];
    let currentIndex = 0;

    function openLightbox(src, images) {
      currentImages = images;
      currentIndex = images.indexOf(src);
      lightboxImg.src = src;
      lightboxImg.alt = 'Gallery image';
      lightbox.classList.add('lightbox--open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('lightbox--open');
      document.body.style.overflow = '';
    }

    function navigate(dir) {
      if (currentImages.length === 0) return;
      currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
      lightboxImg.src = currentImages[currentIndex];
      // Re-trigger scale animation
      lightboxImg.style.transform = 'scale(0.9)';
      requestAnimationFrame(() => {
        lightboxImg.style.transform = '';
      });
    }

    // Click gallery images (uses delegation for dynamically added images)
    document.addEventListener('click', (e) => {
      const img = e.target.closest('.gallery__img');
      if (!img) return;
      const track = img.closest('.gallery__track');
      const images = track ? Array.from(track.querySelectorAll('.gallery__img')).map((el) => el.src) : [img.src];
      openLightbox(img.src, images);
    });

    // Controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));

    // Click backdrop to close
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('lightbox--open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  // ─── Init all ───
  function init() {
    initLucide();
    initScrollProgress();
    initLikeButtons();
    initShareButtons();
    initLightbox();

    // GSAP — wait for everything to load
    if (document.readyState === 'complete') {
      initGSAP();
    } else {
      window.addEventListener('load', initGSAP);
    }

    // Refresh ScrollTrigger on resize
    window.addEventListener('resize', () => {
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
