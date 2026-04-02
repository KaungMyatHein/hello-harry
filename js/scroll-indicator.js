(function(){
  var sections = [];

  // Case study detail pages
  var csSections = document.querySelectorAll('.cs-hero, .cs-section, .cs-ending');
  // Landing page
  var lpSections = document.querySelectorAll('.hero, [data-project], .highlight-section, .exp-wrap, .cta');

  if (csSections.length > 2) {
    sections = Array.from(csSections);
  } else if (lpSections.length > 2) {
    sections = Array.from(lpSections);
  }

  if (sections.length < 2) return;

  var total = sections.length;

  // Build indicator
  var indicator = document.createElement('div');
  indicator.className = 'scroll-indicator';
  indicator.setAttribute('aria-hidden', 'true');

  var dots = [];
  sections.forEach(function(_, i){
    var dot = document.createElement('div');
    dot.className = 'scroll-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', function(){
      sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    indicator.appendChild(dot);
    dots.push(dot);
  });

  var counter = document.createElement('div');
  counter.className = 'scroll-counter';
  counter.textContent = pad(1) + ' / ' + pad(total);
  indicator.appendChild(counter);

  document.body.appendChild(indicator);

  function pad(n){ return n < 10 ? '0' + n : String(n); }

  var currentIndex = 0;

  function setActive(index) {
    if (index === currentIndex) return;
    dots[currentIndex].classList.remove('active');
    dots[index].classList.add('active');
    currentIndex = index;
    counter.textContent = pad(index + 1) + ' / ' + pad(total);
  }

  // IntersectionObserver: fires when a section crosses 50% viewport threshold
  // Most reliable method for scroll-snap pages
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var idx = sections.indexOf(entry.target);
          if (idx !== -1) setActive(idx);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(function(sec) { observer.observe(sec); });
  } else {
    // Fallback: scroll event (also listen on document for scroll-snap compat)
    function updateIndicator() {
      var closest = 0;
      var closestDist = Infinity;
      sections.forEach(function(sec, i) {
        var dist = Math.abs(sec.getBoundingClientRect().top);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setActive(closest);
    }
    window.addEventListener('scroll', updateIndicator, { passive: true });
    document.addEventListener('scroll', updateIndicator, { passive: true });
    updateIndicator();
  }
})();
