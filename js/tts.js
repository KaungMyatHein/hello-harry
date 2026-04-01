(function(){
  if (!('speechSynthesis' in window)) return;

  var synth = window.speechSynthesis;
  var currentBtn = null;
  var currentTimer = null;
  var bestVoice = null;

  var voicePreference = ['Google UK English Female','Google US English','Samantha','Karen','Daniel','Moira','Tessa'];

  function pickBestVoice(){
    var voices = synth.getVoices();
    if (!voices.length) return null;
    for (var i = 0; i < voicePreference.length; i++){
      var match = voices.find(function(v){ return v.name.indexOf(voicePreference[i]) > -1; });
      if (match) return match;
    }
    var en = voices.filter(function(v){ return v.lang.startsWith('en'); });
    return en.find(function(v){ return /Premium|Enhanced|Natural/i.test(v.name); })
      || en.find(function(v){ return !v.localService; })
      || en[0] || voices[0];
  }

  if (synth.getVoices().length) bestVoice = pickBestVoice();
  synth.onvoiceschanged = function(){ bestVoice = pickBestVoice(); };

  function estimateTime(text){
    var words = text.split(/\s+/).length;
    var sec = Math.round((words / 150) * 60 / 0.9);
    if (sec < 60) return sec + 's';
    return Math.floor(sec/60) + ':' + (sec%60 < 10 ? '0' : '') + sec%60;
  }

  function stopAll(){
    synth.cancel();
    if (currentTimer) clearInterval(currentTimer);
    currentTimer = null;
    if (currentBtn){
      currentBtn.classList.remove('tts-playing');
      var label = currentBtn.querySelector('.tts-label-text');
      if (label) label.textContent = 'Listen';
      var time = currentBtn.querySelector('.tts-time');
      if (time) time.textContent = currentBtn.dataset.duration || '';
      var bar = currentBtn.querySelector('.tts-progress-bar');
      if (bar) bar.style.width = '0%';
      currentBtn = null;
    }
  }

  document.querySelectorAll('.cs-section-num').forEach(function(num){
    var section = num.closest('.cs-section');
    if (!section) return;

    var texts = [];
    var h = section.querySelector('.cs-h2');
    if (h) texts.push(h.textContent.trim());
    section.querySelectorAll('.cs-p,.cs-list li,.cs-hook,.cs-quote p,.cs-lesson strong,.cs-lesson p,.cs-card .cs-p').forEach(function(el){
      var t = el.textContent.trim();
      if (t && t.length > 5) texts.push(t);
    });
    var fullText = texts.join('. ').replace(/\.\./g,'.').replace(/\s+/g,' ');
    if (!fullText || fullText.length < 20) return;

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

      var sentences = fullText.match(/[^.!?]+[.!?]+/g) || [fullText];
      var chunks = [], cur = '';
      sentences.forEach(function(s){
        if ((cur+s).length > 180){ if(cur) chunks.push(cur.trim()); cur=s; }
        else cur += s;
      });
      if (cur) chunks.push(cur.trim());

      currentBtn = btn;
      btn.classList.add('tts-playing');
      btn.querySelector('.tts-label-text').textContent = 'Playing';

      var voice = bestVoice || pickBestVoice();
      var idx = 0, total = chunks.length;
      var bar = btn.querySelector('.tts-progress-bar');
      var timeEl = btn.querySelector('.tts-time');
      var totalWords = fullText.split(/\s+/).length;
      var totalSec = Math.round((totalWords/150)*60/0.9);
      var elapsed = 0;

      currentTimer = setInterval(function(){
        elapsed++;
        var rem = Math.max(0, totalSec - elapsed);
        if (rem < 60) timeEl.textContent = rem + 's left';
        else timeEl.textContent = Math.floor(rem/60) + ':' + (rem%60<10?'0':'') + rem%60 + ' left';
      }, 1000);

      function speakNext(){
        if (idx >= total || currentBtn !== btn){ stopAll(); return; }
        bar.style.width = Math.round(((idx+1)/total)*100) + '%';
        var u = new SpeechSynthesisUtterance(chunks[idx]);
        u.rate = 0.9; u.pitch = 1.05; u.volume = 1;
        if (voice) u.voice = voice;
        u.onend = function(){ idx++; setTimeout(speakNext, 120); };
        u.onerror = function(){ stopAll(); };
        synth.speak(u);
      }
      speakNext();
    });

    wrap.appendChild(btn);
    num.appendChild(wrap);
  });

  window.addEventListener('beforeunload', function(){ synth.cancel(); });
  setInterval(function(){ if(synth.speaking && !synth.paused){ synth.pause(); synth.resume(); } }, 10000);
})();
