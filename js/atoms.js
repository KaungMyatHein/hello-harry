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
     · Scroll parallax on multiple hero layers
     ───────────────────────────────────── */
  var heroGlow      = document.querySelector('.hero-glow');
  var heroSection   = document.querySelector('.hero');
  var heroNameBlock = document.querySelector('.hero-name-block');
  var heroTopEl     = document.querySelector('.hero-top');
  var heroBottomEl  = document.querySelector('.hero-bottom');
  var heroLinesEl   = document.querySelector('.hero-lines');

  var glowBaseX = -50, glowBaseY = -55, scrollOff = 0;
  var nameScrollY = 0;
  var nameTiltX = 0, nameTiltY = 0, nameTilting = false;

  function applyGlowTransform() {
    if (heroGlow) {
      heroGlow.style.transform =
        'translate(' + glowBaseX + '%, calc(' + glowBaseY + '% + ' + scrollOff + 'px))';
    }
  }

  function applyNameTransform() {
    if (!heroNameBlock) return;
    if (nameTilting) {
      heroNameBlock.style.transform =
        'translateY(' + nameScrollY + 'px) perspective(900px) rotateX(' + nameTiltX + 'deg) rotateY(' + nameTiltY + 'deg)';
    } else {
      heroNameBlock.style.transform = 'translateY(' + nameScrollY + 'px)';
    }
  }

  /* Scroll: multi-layer parallax */
  window.addEventListener('scroll', function () {
    var sy = window.scrollY;
    scrollOff = sy * 0.2;

    if (heroGlow) {
      applyGlowTransform();
      heroGlow.style.opacity = Math.max(0, 1 - sy / 600);
    }

    /* Hero layers move at different speeds — depth illusion */
    nameScrollY = -sy * 0.07;
    applyNameTransform();

    if (heroTopEl)    heroTopEl.style.transform    = 'translateY(' + (-sy * 0.04) + 'px)';
    if (heroBottomEl) heroBottomEl.style.transform = 'translateY(' + (sy * 0.03) + 'px)';
    if (heroLinesEl)  heroLinesEl.style.transform  = 'translateY(' + (sy * 0.12) + 'px)';
  }, { passive: true });

  /* Mouse: glow follows cursor, name tilts in 3D */
  if (heroSection) {
    heroSection.addEventListener('mousemove', function (e) {
      var rect = heroSection.getBoundingClientRect();
      var x = (e.clientX - rect.left)  / rect.width  - 0.5;  /* -0.5 → 0.5 */
      var y = (e.clientY - rect.top)   / rect.height - 0.5;

      glowBaseX = -50 + x * 22;
      glowBaseY = -55 + y * 16;
      applyGlowTransform();

      nameTilting = true;
      nameTiltX = -y * 4;
      nameTiltY = x * 6;
      applyNameTransform();
    });

    heroSection.addEventListener('mouseleave', function () {
      glowBaseX = -50; glowBaseY = -55;
      applyGlowTransform();
      nameTilting = false;
      nameTiltX = 0; nameTiltY = 0;
      applyNameTransform();
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

  /* ─────────────────────────────────────
     PROJECT THUMBNAIL INNER PARALLAX
     Inner media moves at 0.4× scroll speed
     relative to viewport centre — classic
     "image slower than container" effect.
     Requires .proj-thumb to have overflow:hidden
     and media height:120% / top:-10% (set in CSS).
     ───────────────────────────────────── */
  var projThumbs = document.querySelectorAll('.proj-thumb');

  function updateThumbParallax() {
    var vH = window.innerHeight;
    projThumbs.forEach(function (thumb) {
      var media = thumb.querySelector('img, video');
      if (!media) return;
      var rect     = thumb.getBoundingClientRect();
      var centerY  = rect.top + rect.height * 0.5;
      var progress = (vH * 0.5 - centerY) / (vH * 0.5 + rect.height * 0.5);
      /* clamp to ±1 so off-screen elements don't fly */
      progress = Math.max(-1, Math.min(1, progress));
      var offset = progress * 28; /* ±28 px — fits inside the 10% top/bottom buffer */
      media.style.transform = 'translateY(' + offset + 'px)';
    });
  }

  window.addEventListener('scroll', updateThumbParallax, { passive: true });
  updateThumbParallax();

  /* ─────────────────────────────────────
     SEE OTHER CASE STUDIES TOGGLE
     Shows/hides the secondary projects grid.
     ───────────────────────────────────── */
  var seeMoreBtn    = document.getElementById('seeMoreBtn');
  var projectsExtra = document.getElementById('projectsExtra');

  if (seeMoreBtn && projectsExtra) {
    var btnLabel = seeMoreBtn.querySelector('span');

    seeMoreBtn.addEventListener('click', function () {
      var isOpen = seeMoreBtn.classList.toggle('open');

      if (isOpen) {
        projectsExtra.style.display = 'grid';
        btnLabel.textContent = 'Hide Other Case Studies';

        /* Reveal sr elements that are already in viewport */
        setTimeout(function () {
          var vH = window.innerHeight;
          projectsExtra.querySelectorAll('.sr:not(.vis)').forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top < vH) el.classList.add('vis');
          });
          /* Scroll to the newly revealed section */
          projectsExtra.scrollIntoView({ behavior: 'smooth', block: 'start' });
          /* Parallax: update thumb parallax for newly visible thumbs */
          updateThumbParallax();
        }, 50);

      } else {
        projectsExtra.style.display = 'none';
        btnLabel.textContent = 'See Other Case Studies';
        /* Scroll back up to the button */
        seeMoreBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  /* ─────────────────────────────────────
     ORIENTATION OVERLAY — case studies only
     Shows on mobile portrait, hides on landscape.
     "Continue anyway" persists via sessionStorage.
     ───────────────────────────────────── */
  if (document.querySelector('.reveal')) {
    var oEl = document.createElement('div');
    oEl.className = 'orient-overlay';
    oEl.id = 'orientOverlay';
    oEl.innerHTML = [
      '<div class="orient-icon-wrap">',
        /* phone SVG */
        '<svg class="orient-phone" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">',
          '<rect x="5" y="2" width="14" height="20" rx="2"/>',
          '<circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/>',
        '</svg>',
        /* arc arrow SVG */
        '<svg class="orient-arc" width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2">',
          '<path d="M20 58 A26 26 0 0 1 58 20" stroke-linecap="round" stroke-dasharray="5 4"/>',
          '<polyline points="52,14 58,20 52,26" stroke-linecap="round" stroke-linejoin="round"/>',
        '</svg>',
      '</div>',
      '<p class="orient-title">Rotate your device</p>',
      '<p class="orient-sub">Best viewed in landscape</p>',
      '<button class="orient-skip" id="orientSkip">Continue anyway &rarr;</button>'
    ].join('');

    document.body.appendChild(oEl);

    function checkOrient() {
      if (sessionStorage.getItem('orientOk')) return;
      if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
        oEl.classList.add('active');
      } else {
        oEl.classList.remove('active');
      }
    }

    document.getElementById('orientSkip').addEventListener('click', function () {
      oEl.classList.remove('active');
      sessionStorage.setItem('orientOk', '1');
    });

    checkOrient();
    window.addEventListener('resize', checkOrient, { passive: true });
    window.addEventListener('orientationchange', function () {
      setTimeout(checkOrient, 120); /* short delay for browser to update dimensions */
    });
  }

})();
