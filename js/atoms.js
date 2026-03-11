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

    function handleToggle() {
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
     HERO INTERACTIVITY (landing page)
     · Glow tracks mouse position
     · Name block subtle 3D tilt
     · Scroll parallax + fade on glow
     ───────────────────────────────────── */
  var heroGlow      = document.querySelector('.hero-glow');
  var heroSection   = document.querySelector('.hero');
  var heroNameBlock = document.querySelector('.hero-name-block');

  var glowBaseX = -50, glowBaseY = -55, scrollOff = 0;

  function applyGlowTransform() {
    if (heroGlow) {
      heroGlow.style.transform =
        'translate(' + glowBaseX + '%, calc(' + glowBaseY + '% + ' + scrollOff + 'px))';
    }
  }

  /* Scroll: vertical parallax + fade */
  window.addEventListener('scroll', function () {
    scrollOff = window.scrollY * 0.2;
    if (heroGlow) {
      applyGlowTransform();
      heroGlow.style.opacity = Math.max(0, 1 - window.scrollY / 600);
    }
  });

  /* Mouse: glow follows cursor, name tilts in 3D */
  if (heroSection) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = heroSection.getBoundingClientRect();
      var x = (e.clientX - rect.left)  / rect.width  - 0.5;  /* -0.5 → 0.5 */
      var y = (e.clientY - rect.top)   / rect.height - 0.5;

      glowBaseX = -50 + x * 22;
      glowBaseY = -55 + y * 16;
      applyGlowTransform();

      if (heroNameBlock) {
        heroNameBlock.style.transform =
          'perspective(900px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 6) + 'deg)';
      }
    });

    heroSection.addEventListener('mouseleave', function () {
      glowBaseX = -50; glowBaseY = -55;
      applyGlowTransform();
      if (heroNameBlock) heroNameBlock.style.transform = '';
    });
  }

  /* ─────────────────────────────────────
     HERO STAT COUNTER ANIMATION
     Numbers count up when scrolled into view
     ───────────────────────────────────── */
  var hsNums = document.querySelectorAll('.hs-num');
  if (hsNums.length && 'IntersectionObserver' in window) {
    hsNums.forEach(function (el) {
      var raw   = el.textContent.trim();
      var match = raw.match(/^([\d.]+)(.*)$/);
      if (!match) return;
      var target  = parseFloat(match[1]);
      var suffix  = match[2];
      var started = false;

      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting || started) return;
          started = true;
          var t0 = null, dur = 1400;
          requestAnimationFrame(function tick(ts) {
            if (!t0) t0 = ts;
            var p     = Math.min((ts - t0) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3); /* ease-out cubic */
            el.textContent = Math.floor(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = raw;
          });
          obs.disconnect();
        });
      }, { threshold: 0.8 });

      obs.observe(el);
    });
  }

})();
