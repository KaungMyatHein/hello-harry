/* Lightbox — auto-attach to case study media (img + video). Idempotent. */
(function(){
  if(window.__lbInstalled) return;
  window.__lbInstalled = true;

  var overlay = document.createElement('div');
  overlay.className = 'lb-overlay';
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.innerHTML = '<button class="lb-close" type="button" aria-label="Close">×</button><div class="lb-content"></div>';
  document.body.appendChild(overlay);

  var content = overlay.querySelector('.lb-content');
  var closeBtn = overlay.querySelector('.lb-close');

  function close(){
    overlay.classList.remove('open');
    document.body.classList.remove('lb-active');
    var v = content.querySelector('video');
    if(v) { try { v.pause(); } catch(e){} }
    content.innerHTML = '';
  }

  function open(el){
    content.innerHTML = '';
    if(el.tagName === 'IMG'){
      var img = document.createElement('img');
      img.src = el.currentSrc || el.src;
      img.alt = el.alt || '';
      content.appendChild(img);
    } else if(el.tagName === 'VIDEO'){
      var v = document.createElement('video');
      var src = el.currentSrc || el.getAttribute('src');
      if(src) v.src = src;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      content.appendChild(v);
      try { v.play().catch(function(){}); } catch(e){}
    }
    overlay.classList.add('open');
    document.body.classList.add('lb-active');
  }

  closeBtn.addEventListener('click', function(e){
    e.stopPropagation();
    close();
  });

  overlay.addEventListener('click', function(e){
    if(e.target === overlay) close();
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.classList.contains('open')) close();
  });

  function attachHandlers(root){
    // Broad: every img + video in the document body.
    // Skip nav/footer chrome, opt-outs, lightbox itself, and videos that
    // already expose controls (assume inline-play UX).
    var skipParents = '.lb-overlay, nav, .nav, .cs-nav, header.nav, footer, .footer, .cs-loader, .cs-back, .nav-back, .brand, .chat-trigger, .briefing-modal';
    (root || document).querySelectorAll('img, video').forEach(function(el){
      if(el.__lbBound) return;
      if(el.closest(skipParents)) return;
      if(el.hasAttribute('data-lb-skip')) return;
      // Skip tiny chrome icons (e.g., logo/brand) by min dimension.
      var w = el.naturalWidth || el.videoWidth || el.clientWidth || 0;
      var h = el.naturalHeight || el.videoHeight || el.clientHeight || 0;
      if(w && h && Math.min(w, h) < 80) return;
      el.__lbBound = true;
      el.setAttribute('data-lb-trigger', '');
      el.addEventListener('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        open(el);
      });
    });
  }

  function init(){ attachHandlers(document); }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  setTimeout(init, 1500);
  setTimeout(init, 3500);
})();
