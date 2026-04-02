(function(){
  // Create lightbox element
  var lb = document.createElement('div');
  lb.className = 'cs-lightbox';
  lb.id = 'lightbox';
  lb.innerHTML = '<button class="cs-lightbox-close" id="lightboxClose"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button><div id="lightboxContent"></div>';
  document.body.appendChild(lb);

  var content = document.getElementById('lightboxContent');
  var closeBtn = document.getElementById('lightboxClose');

  // Attach click to all media elements + gallery items
  document.querySelectorAll('.cs-img, .cs-split-media, .cs-video, .cs-gallery-item').forEach(function(el) {
    el.addEventListener('click', function() {
      var img = el.querySelector('img');
      var vid = el.querySelector('video');
      if (!img && !vid) return;  // empty gallery placeholder — do nothing
      content.innerHTML = '';

      if (img) {
        var clone = document.createElement('img');
        clone.src = img.src;
        clone.alt = img.alt || '';
        content.appendChild(clone);
      } else if (vid) {
        var vClone = document.createElement('video');
        vClone.src = vid.src;
        vClone.controls = true;
        vClone.autoplay = true;
        vClone.style.maxWidth = '92vw';
        vClone.style.maxHeight = '90vh';
        vClone.style.borderRadius = '12px';
        content.appendChild(vClone);
      }

      lb.classList.add('open');
    });
  });

  function closeLightbox() {
    lb.classList.remove('open');
    var v = content.querySelector('video');
    if (v) v.pause();
    content.innerHTML = '';
  }

  closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    closeLightbox();
  });

  lb.addEventListener('click', function(e) {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
})();
