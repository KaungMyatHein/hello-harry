// STAR+R presentation runtime — scroll-snap deck navigation + lightbox

// ─── LIGHTBOX — click any media-card image/video to open full-size ───
(function(){
  if (document.getElementById('lightbox')) return;

  const lb = document.createElement('div');
  lb.id = 'lightbox';
  lb.className = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Close (Esc)">×</button>
    <div class="lightbox-content">
      <div class="lightbox-media"></div>
      <div class="lightbox-cap"></div>
    </div>
    <div class="lightbox-hint"><kbd>Esc</kbd> close · click outside</div>
  `;
  document.body.appendChild(lb);

  const closeBtn = lb.querySelector('.lightbox-close');
  const mediaContainer = lb.querySelector('.lightbox-media');
  const capContainer = lb.querySelector('.lightbox-cap');
  let lastFocused = null;

  function open(el){
    const card = el.closest('.media-card');
    if (!card) return;

    lastFocused = document.activeElement;

    // Pause underlying autoplay videos for performance
    document.querySelectorAll('.media-card video').forEach(v => {
      try { v.pause(); } catch(_){}
    });

    let cloneEl;
    if (el.tagName === 'IMG'){
      cloneEl = document.createElement('img');
      cloneEl.src = el.currentSrc || el.src;
      cloneEl.alt = el.alt || '';
    } else if (el.tagName === 'VIDEO'){
      cloneEl = document.createElement('video');
      cloneEl.src = el.currentSrc || el.src;
      cloneEl.controls = true;
      cloneEl.autoplay = true;
      cloneEl.loop = true;
      cloneEl.playsInline = true;
    }
    if (!cloneEl) return;

    mediaContainer.innerHTML = '';
    mediaContainer.appendChild(cloneEl);

    const cap = card.querySelector('.media-cap');
    if (cap){
      const label = cap.querySelector('.l')?.textContent?.trim() || '';
      const text = cap.querySelector('.t')?.innerHTML || '';
      capContainer.innerHTML = label ? `<strong>${label}</strong>${text}` : text;
    } else {
      capContainer.innerHTML = '';
    }

    lb.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close(){
    if (!lb.classList.contains('open')) return;
    lb.classList.remove('open');

    const v = mediaContainer.querySelector('video');
    if (v){ try { v.pause(); v.removeAttribute('src'); v.load(); } catch(_){} }
    mediaContainer.innerHTML = '';
    capContainer.innerHTML = '';
    document.documentElement.style.overflow = '';

    // Resume in-deck autoplay videos
    document.querySelectorAll('.media-card video[autoplay]').forEach(v => {
      try { v.play().catch(() => {}); } catch(_){}
    });

    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.media-card img, .media-card video')){
      e.preventDefault();
      open(target);
      return;
    }
    if (lb.classList.contains('open')){
      if (target === lb || target === closeBtn || target.closest('.lightbox-close')){
        close();
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lb.classList.contains('open')){
      e.preventDefault();
      close();
    }
  });
})();

// ─── DECK — scroll-snap navigation (only on case-study pages) ───
(function(){
  const deck = document.getElementById('deck');
  if (!deck) return;

  const slides = Array.from(deck.querySelectorAll('.slide'));
  const sideNav = document.getElementById('sideNav');
  const progress = document.getElementById('progress');

  if (sideNav) {
    slides.forEach((slide, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', `Go to slide ${idx + 1}: ${slide.dataset.title || 'slide'}`);
      btn.title = slide.dataset.title || `Slide ${idx + 1}`;
      btn.addEventListener('click', () => {
        slide.scrollIntoView({behavior: 'smooth', block: 'start'});
      });
      sideNav.appendChild(btn);
    });
  }

  const dots = sideNav ? Array.from(sideNav.querySelectorAll('button')) : [];

  function setActive(idx){
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    if (progress) {
      const pct = ((idx + 1) / slides.length) * 100;
      progress.style.width = pct + '%';
    }
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
        const idx = slides.indexOf(entry.target);
        if (idx >= 0) setActive(idx);
      }
    });
  }, {threshold: [0.55, 0.7, 0.85], root: deck});

  slides.forEach(s => io.observe(s));

  function currentIdx(){
    const scrollTop = deck.scrollTop;
    const h = window.innerHeight;
    return Math.round(scrollTop / h);
  }

  function go(delta){
    const idx = currentIdx();
    const target = Math.max(0, Math.min(slides.length - 1, idx + delta));
    slides[target].scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  window.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, [contenteditable]')) return;
    switch(e.key){
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault(); go(1); break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault(); go(-1); break;
      case ' ':
        e.preventDefault(); go(e.shiftKey ? -1 : 1); break;
      case 'Home':
        e.preventDefault(); slides[0].scrollIntoView({behavior: 'smooth'}); break;
      case 'End':
        e.preventDefault(); slides[slides.length - 1].scrollIntoView({behavior: 'smooth'}); break;
    }
  });

  setActive(0);
})();
