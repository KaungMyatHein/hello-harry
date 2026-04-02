(function(){
  if (!('speechSynthesis' in window)) return;

  var synth = window.speechSynthesis;
  var currentBtn      = null;
  var currentTimer    = null;
  var currentWordSpan = null;  // the currently highlighted <span>
  var currentUnwrap   = null;  // fn to restore DOM after wrapping

  var bestVoice = null;
  var voicePreference = ['Google UK English Female','Google US English','Samantha','Karen','Daniel','Moira','Tessa'];

  function pickBestVoice(){
    var voices = synth.getVoices();
    if (!voices.length) return null;
    for (var i = 0; i < voicePreference.length; i++){
      var m = voices.find(function(v){ return v.name.indexOf(voicePreference[i]) > -1; });
      if (m) return m;
    }
    var en = voices.filter(function(v){ return v.lang.startsWith('en'); });
    return en.find(function(v){ return /Premium|Enhanced|Natural/i.test(v.name); })
      || en.find(function(v){ return !v.localService; })
      || en[0] || voices[0];
  }
  if (synth.getVoices().length) bestVoice = pickBestVoice();
  synth.onvoiceschanged = function(){ bestVoice = pickBestVoice(); };

  function estimateTime(text){
    var w = text.split(/\s+/).length;
    var s = Math.round((w / 150) * 60 / 0.9);
    if (s < 60) return s + 's';
    return Math.floor(s/60) + ':' + (s%60 < 10 ? '0' : '') + s%60;
  }

  /* ── Word-span wrapping ─────────────────────────────── */

  /**
   * Walk all text nodes inside `el`, replace each word token
   * with <span class="tts-word">. Push { span, start, end }
   * into wordMap where start/end are positions in fullText.
   * Returns the updated cursor position.
   */
  function wrapWords(el, pos, wordMap){
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [];
    var n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function(textNode){
      var text = textNode.textContent;
      var frag = document.createDocumentFragment();
      var re = /(\S+)/g, last = 0, m;
      while ((m = re.exec(text))){
        /* leading whitespace / separators */
        if (m.index > last){
          var pre = text.slice(last, m.index);
          frag.appendChild(document.createTextNode(pre));
          pos += pre.length;
        }
        var word = m[0];
        var span = document.createElement('span');
        span.className = 'tts-word';
        span.textContent = word;
        wordMap.push({ span: span, start: pos, end: pos + word.length });
        pos += word.length;
        frag.appendChild(span);
        last = m.index + word.length;
      }
      /* trailing whitespace */
      if (last < text.length){
        var trail = text.slice(last);
        frag.appendChild(document.createTextNode(trail));
        pos += trail.length;
      }
      textNode.parentNode.replaceChild(frag, textNode);
    });
    return pos;
  }

  /* ── Stop / cleanup ─────────────────────────────────── */

  function clearWordHighlight(){
    if (currentWordSpan){ currentWordSpan.classList.remove('tts-word-active'); currentWordSpan = null; }
  }

  function stopAll(){
    synth.cancel();
    if (currentTimer){ clearInterval(currentTimer); currentTimer = null; }
    clearWordHighlight();
    if (currentUnwrap){ currentUnwrap(); currentUnwrap = null; }
    if (currentBtn){
      currentBtn.classList.remove('tts-playing');
      var lbl = currentBtn.querySelector('.tts-label-text');
      if (lbl) lbl.textContent = 'Listen';
      var tm = currentBtn.querySelector('.tts-time');
      if (tm) tm.textContent = currentBtn.dataset.duration || '';
      var bar = currentBtn.querySelector('.tts-progress-bar');
      if (bar) bar.style.width = '0%';
      currentBtn = null;
    }
  }

  /* ── Init one TTS button per section ────────────────── */

  document.querySelectorAll('.cs-section-num').forEach(function(num){
    var section = num.closest('.cs-section');
    if (!section) return;

    /* Build fullText + per-element char ranges */
    var sourceEls = [];
    var elRanges  = [];   // { start, end } in fullText
    var fullText  = '';

    function addEl(el){
      var t = el.textContent.trim();
      if (!t || t.length < 5) return;
      var s = fullText.length;
      fullText += t + '. ';
      sourceEls.push(el);
      elRanges.push({ start: s, end: s + t.length });
    }

    var h = section.querySelector('.cs-h2');
    if (h) addEl(h);
    section.querySelectorAll(
      '.cs-p,.cs-list li,.cs-hook,.cs-quote p,.cs-lesson strong,.cs-lesson p,' +
      '.cs-card-label,.cs-card .cs-p,.cs-data-desc,' +
      '.cs-tt-title,.cs-tt-desc'
    ).forEach(addEl);

    fullText = fullText.replace(/\.\s*\./g, '.').replace(/\s+/g, ' ').trim();
    if (!fullText || fullText.length < 20) return;

    /* Build chunks with start offsets in fullText */
    var sentences = fullText.match(/[^.!?]+[.!?]+/g) || [fullText];
    var chunks = [], chunkOffsets = [];
    var cur = '', curStart = 0, absPos = 0;
    sentences.forEach(function(s){
      if ((cur + s).length > 180){
        if (cur){ chunks.push(cur.trim()); chunkOffsets.push(curStart); }
        curStart = absPos; cur = s;
      } else { cur += s; }
      absPos += s.length;
    });
    if (cur){ chunks.push(cur.trim()); chunkOffsets.push(curStart); }

    /* Build button */
    var duration = estimateTime(fullText);
    var wrap = document.createElement('div');
    wrap.className = 'tts-wrap';
    var btn = document.createElement('button');
    btn.className = 'tts-btn';
    btn.dataset.duration = duration;
    btn.innerHTML =
      '<div class="tts-play">' +
        '<svg class="tts-icon-play" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="7 4 20 12 7 20"/></svg>' +
        '<svg class="tts-icon-stop" viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>' +
      '</div>' +
      '<div class="tts-track">' +
        '<div class="tts-eq"><span></span><span></span><span></span></div>' +
        '<div class="tts-progress"><div class="tts-progress-bar"></div></div>' +
        '<div class="tts-meta">' +
          '<span class="tts-label-text">Listen</span>' +
          '<span class="tts-time">' + duration + '</span>' +
        '</div>' +
      '</div>';

    btn.addEventListener('click', function(){
      if (currentBtn === btn){ stopAll(); return; }
      stopAll();

      /* ── Wrap every word in source elements ── */
      var wordMap      = [];
      var savedHtml    = [];
      var localPos     = 0;

      sourceEls.forEach(function(el, i){
        savedHtml.push({ el: el, html: el.innerHTML });
        /* start pos for this element = elRanges[i].start */
        wrapWords(el, elRanges[i].start, wordMap);
      });

      /* Restore fn passed to stopAll */
      currentUnwrap = function(){
        clearWordHighlight();
        savedHtml.forEach(function(s){ s.el.innerHTML = s.html; });
      };

      /* Button state */
      currentBtn = btn;
      btn.classList.add('tts-playing');
      btn.querySelector('.tts-label-text').textContent = 'Playing';

      var voice   = bestVoice || pickBestVoice();
      var idx     = 0, total = chunks.length;
      var barEl   = btn.querySelector('.tts-progress-bar');
      var timeEl  = btn.querySelector('.tts-time');
      var totalWords = fullText.split(/\s+/).length;
      var totalSec   = Math.round((totalWords / 150) * 60 / 0.9);
      var elapsed    = 0;

      currentTimer = setInterval(function(){
        elapsed++;
        var rem = Math.max(0, totalSec - elapsed);
        timeEl.textContent = rem < 60
          ? rem + 's left'
          : Math.floor(rem/60) + ':' + (rem%60 < 10 ? '0' : '') + rem%60 + ' left';
      }, 1000);

      function speakNext(){
        if (idx >= total || currentBtn !== btn){ stopAll(); return; }
        barEl.style.width = Math.round(((idx + 1) / total) * 100) + '%';

        var chunkStart = chunkOffsets[idx] || 0;
        var u = new SpeechSynthesisUtterance(chunks[idx]);
        u.rate = 0.9; u.pitch = 1.05; u.volume = 1;
        if (voice) u.voice = voice;

        /* ── Word-level highlight via onboundary ── */
        u.onboundary = function(e){
          if (e.name !== 'word') return;
          var absChar = chunkStart + e.charIndex;
          var found = null;
          for (var k = 0; k < wordMap.length; k++){
            if (absChar >= wordMap[k].start && absChar < wordMap[k].end){
              found = wordMap[k].span; break;
            }
          }
          if (found !== currentWordSpan){
            clearWordHighlight();
            if (found){ found.classList.add('tts-word-active'); currentWordSpan = found; }
          }
        };

        u.onend  = function(){ idx++; setTimeout(speakNext, 120); };
        u.onerror = function(){ stopAll(); };
        synth.speak(u);
      }
      speakNext();
    });

    wrap.appendChild(btn);
    num.appendChild(wrap);
  });

  /* ── Stop on section change ─────────────────────────── */
  if ('IntersectionObserver' in window){
    var activeSection = null;
    var sectionObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting && e.target !== activeSection){
          if (currentBtn) stopAll();
          activeSection = e.target;
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.cs-hero,.cs-section,.cs-ending')
      .forEach(function(el){ sectionObserver.observe(el); });
  }

  window.addEventListener('beforeunload', function(){ synth.cancel(); });
  setInterval(function(){
    if (synth.speaking && !synth.paused){ synth.pause(); synth.resume(); }
  }, 10000);
})();
