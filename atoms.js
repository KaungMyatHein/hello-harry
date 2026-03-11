/**
 * atoms.js — Harry Hein Portfolio
 * Shared JavaScript behaviors used across all pages.
 * Include after the closing </main> / before </body>.
 */

(function () {

  /* ─────────────────────────────────────
     CUSTOM CURSOR
     Smooth-follows the pointer with lag.
     Requires: <div class="cursor" id="cursor"></div>
               <div class="cursor-dot" id="cursorDot"></div>
     ───────────────────────────────────── */
  const cursor = document.getElementById('cursor');
  const dot    = document.getElementById('cursorDot');

  if (cursor && dot) {
    let mx = 0, my = 0, cx = 0, cy = 0;

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
    });

    function animateCursor() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      cursor.style.left = cx + 'px';
      cursor.style.top  = cy + 'px';
      dot.style.left    = mx + 'px';
      dot.style.top     = my + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    /* Expand cursor on hover over interactive elements */
    document.querySelectorAll(
      'a, button, .project, .skill-card, .testi-card, .exp-item, [data-hover]'
    ).forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('hovering'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('hovering'); });
    });
  }

  /* ─────────────────────────────────────
     SCROLL REVEAL
     Adds `.vis` to `.sr` elements when
     they enter the viewport.
     ───────────────────────────────────── */
  var srEls = document.querySelectorAll('.sr');
  if (srEls.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('vis');
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
    srEls.forEach(function (el) { obs.observe(el); });
  }

  /* ─────────────────────────────────────
     SMOOTH SCROLL — anchor links
     ───────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─────────────────────────────────────
     PROJECT DETAIL TOGGLE (landing page)
     Expands/collapses project detail panels.
     ───────────────────────────────────── */
  document.querySelectorAll('[data-project]').forEach(function (proj) {
    var toggle = proj.querySelector('[data-toggle]');
    if (!toggle) return;

    function handleToggle(e) {
      /* Close other open projects */
      document.querySelectorAll('[data-project].open').forEach(function (p) {
        if (p !== proj) p.classList.remove('open');
      });
      proj.classList.toggle('open');
    }

    toggle.addEventListener('click', handleToggle);

    /* Also allow clicking the proj-info area */
    var info = proj.querySelector('.proj-info');
    if (info) {
      info.style.cursor = 'none';
      info.addEventListener('click', function (e) {
        if (e.target.closest('[data-toggle]') || e.target.closest('.case-study-link')) return;
        handleToggle(e);
      });
    }
  });

  /* ─────────────────────────────────────
     HERO PARALLAX GLOW (landing page)
     ───────────────────────────────────── */
  var heroGlow = document.querySelector('.hero-glow');
  if (heroGlow) {
    window.addEventListener('scroll', function () {
      var s = window.scrollY;
      heroGlow.style.transform = 'translate(-50%, calc(-55% + ' + (s * 0.2) + 'px))';
      heroGlow.style.opacity   = Math.max(0, 1 - s / 600);
    });
  }

})();
