/* marker-drag.js — drag-to-reposition markers + expand buttons, saved to localStorage */
(function () {
  var PAGE_KEY = location.pathname;

  function storageKey(type, ci, idx) {
    return 'mpos_' + PAGE_KEY + '_' + type + '_c' + ci + '_' + idx;
  }

  /* Generic drag using top/left % relative to .annotated-ui container.
     el must have position:absolute. Markers use transform:translate(-50%,-50%)
     so we track their center; expand-btn uses top/left corner directly. */
  function makeDraggable(el, ci, idx, type, useCenter) {
    var isDragging = false;
    var startMouseX, startMouseY, startPctX, startPctY;

    el.addEventListener('mousedown', function (e) {
      if (!document.body.classList.contains('marker-edit-mode')) return;
      e.preventDefault();
      e.stopPropagation();
      isDragging = true;
      el.style.zIndex = '200';

      var container = el.closest('.annotated-ui');
      var rect = container.getBoundingClientRect();
      var er   = el.getBoundingClientRect();

      startMouseX = e.clientX;
      startMouseY = e.clientY;

      if (useCenter) {
        startPctX = ((er.left + er.width  / 2 - rect.left) / rect.width)  * 100;
        startPctY = ((er.top  + er.height / 2 - rect.top)  / rect.height) * 100;
      } else {
        startPctX = ((er.left - rect.left) / rect.width)  * 100;
        startPctY = ((er.top  - rect.top)  / rect.height) * 100;
      }

      el.style.right  = '';
      el.style.bottom = '';
      el.style.left   = startPctX + '%';
      el.style.top    = startPctY + '%';

      function onMove(e) {
        if (!isDragging) return;
        var r  = container.getBoundingClientRect();
        var nx = Math.max(0, Math.min(100, startPctX + (e.clientX - startMouseX) / r.width  * 100));
        var ny = Math.max(0, Math.min(100, startPctY + (e.clientY - startMouseY) / r.height * 100));
        el.style.left = nx + '%';
        el.style.top  = ny + '%';
      }

      function onUp() {
        isDragging = false;
        el.style.zIndex = '';
        localStorage.setItem(storageKey(type, ci, idx), JSON.stringify({
          top:  el.style.top,
          left: el.style.left
        }));
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });
  }

  function loadPositions() {
    document.querySelectorAll('.annotated-ui').forEach(function (container, ci) {
      container.querySelectorAll('.marker').forEach(function (el, i) {
        var saved = localStorage.getItem(storageKey('m', ci, i));
        if (saved) {
          try {
            var pos = JSON.parse(saved);
            el.style.top = pos.top; el.style.left = pos.left;
            el.style.right = ''; el.style.bottom = '';
          } catch (e) {}
        }
      });
      container.querySelectorAll('.expand-btn').forEach(function (el, i) {
        var saved = localStorage.getItem(storageKey('e', ci, i));
        if (saved) {
          try {
            var pos = JSON.parse(saved);
            el.style.top = pos.top; el.style.left = pos.left;
            el.style.right = ''; el.style.bottom = '';
          } catch (e) {}
        }
      });
    });
  }

  /* Collect all current positions and copy to clipboard as JSON for hardcoding */
  function copyPositions() {
    var result = {};
    document.querySelectorAll('.annotated-ui').forEach(function (container, ci) {
      var key = 'container_' + ci;
      result[key] = { markers: [], expandBtns: [] };
      container.querySelectorAll('.marker').forEach(function (el) {
        result[key].markers.push({ top: el.style.top, left: el.style.left });
      });
      container.querySelectorAll('.expand-btn').forEach(function (el) {
        result[key].expandBtns.push({ top: el.style.top, left: el.style.left });
      });
    });
    var json = JSON.stringify(result, null, 2);
    try {
      navigator.clipboard.writeText(json).then(function () { showToast('Positions copied! Paste to Claude.'); });
    } catch (e) {
      /* fallback */
      var ta = document.createElement('textarea');
      ta.value = json;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast('Positions copied! Paste to Claude.');
    }
  }

  function showToast(msg) {
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:20000;padding:10px 20px;background:rgba(126,184,126,.95);color:#fff;border-radius:6px;font-family:"Space Mono",monospace;font-size:11px;letter-spacing:.08em;pointer-events:none;transition:opacity .4s';
    document.body.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 400); }, 2500);
  }

  function addEditUI() {
    var PENCIL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>';
    var CHECK  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>';
    var COPY   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';

    var btn = document.createElement('button');
    btn.id  = 'markerEditBtn';
    btn.innerHTML = PENCIL + ' Edit Positions';
    btn.style.cssText = 'position:fixed;top:20px;right:16px;z-index:10002;display:flex;align-items:center;gap:6px;padding:8px 16px;background:rgba(10,10,10,.9);color:var(--cream-dim,#c8bda8);border:1px solid rgba(240,230,211,.25);border-radius:6px;font-family:"Space Mono",monospace;font-size:11px;text-transform:uppercase;letter-spacing:.15em;cursor:pointer;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:color .25s,border-color .25s';

    btn.addEventListener('click', function () {
      var on = document.body.classList.toggle('marker-edit-mode');
      btn.innerHTML     = on ? CHECK + ' Done' : PENCIL + ' Edit Positions';
      btn.style.color       = on ? 'var(--accent,#e8734a)' : 'var(--cream-dim,#c8bda8)';
      btn.style.borderColor = on ? 'var(--accent,#e8734a)' : 'rgba(240,230,211,.25)';
      copyBtn.style.display = on ? 'flex' : 'none';
    });

    /* Copy positions button — visible only in edit mode */
    var copyBtn = document.createElement('button');
    copyBtn.id = 'markerCopyBtn';
    copyBtn.innerHTML = COPY + ' Copy Positions';
    copyBtn.style.cssText = 'position:fixed;top:20px;right:180px;z-index:10002;display:none;align-items:center;gap:6px;padding:8px 14px;background:rgba(10,10,10,.9);color:rgba(126,184,126,.9);border:1px solid rgba(126,184,126,.35);border-radius:6px;font-family:"Space Mono",monospace;font-size:11px;text-transform:uppercase;letter-spacing:.15em;cursor:pointer;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)';
    copyBtn.addEventListener('click', copyPositions);

    /* Reset button — clears saved positions and restores HTML defaults */
    var resetBtn = document.createElement('button');
    resetBtn.id = 'markerResetBtn';
    resetBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg> Reset';
    resetBtn.style.cssText = 'position:fixed;top:56px;right:16px;z-index:10002;display:flex;align-items:center;gap:6px;padding:8px 14px;background:rgba(10,10,10,.9);color:rgba(240,230,211,.4);border:1px solid rgba(240,230,211,.12);border-radius:6px;font-family:"Space Mono",monospace;font-size:11px;text-transform:uppercase;letter-spacing:.15em;cursor:pointer;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);transition:color .2s,border-color .2s';
    resetBtn.addEventListener('mouseenter', function () {
      resetBtn.style.color = '#e8734a';
      resetBtn.style.borderColor = 'rgba(232,115,74,.4)';
    });
    resetBtn.addEventListener('mouseleave', function () {
      resetBtn.style.color = 'rgba(240,230,211,.4)';
      resetBtn.style.borderColor = 'rgba(240,230,211,.12)';
    });
    resetBtn.addEventListener('click', function () {
      /* remove all saved positions for this page */
      Object.keys(localStorage).forEach(function (k) {
        if (k.indexOf('mpos_' + PAGE_KEY) === 0) localStorage.removeItem(k);
      });
      /* restore original inline styles from HTML attributes by reloading */
      location.reload();
    });

    document.body.appendChild(btn);
    document.body.appendChild(copyBtn);
    document.body.appendChild(resetBtn);

    var style = document.createElement('style');
    style.textContent = [
      /* markers */
      'body.marker-edit-mode .annotated-ui .marker{pointer-events:auto!important;cursor:grab!important;outline:2px dashed rgba(232,115,74,.7);outline-offset:3px}',
      'body.marker-edit-mode .annotated-ui .marker:active{cursor:grabbing!important}',
      'body.marker-edit-mode .annotated-ui .marker:hover{outline-color:var(--accent,#e8734a);transform:translate(-50%,-50%) scale(1.18)}',
      /* expand buttons */
      'body.marker-edit-mode .annotated-ui .expand-btn{cursor:grab!important;outline:2px dashed rgba(107,163,214,.7);outline-offset:3px;opacity:1!important}',
      'body.marker-edit-mode .annotated-ui .expand-btn:active{cursor:grabbing!important}',
      'body.marker-edit-mode .annotated-ui .expand-btn:hover{outline-color:var(--blue,#6ba3d6)}',
      /* hint label */
      'body.marker-edit-mode .annotated-ui::after{content:"drag markers (orange) · drag expand btn (blue)";position:absolute;bottom:6px;left:50%;transform:translateX(-50%);font-family:"Space Mono",monospace;font-size:9px;color:rgba(232,115,74,.65);letter-spacing:.06em;text-transform:uppercase;pointer-events:none;white-space:nowrap}',
    ].join('');
    document.head.appendChild(style);
  }

  window.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll('.annotated-ui');
    if (!containers.length) return;

    loadPositions();

    containers.forEach(function (container, ci) {
      container.querySelectorAll('.marker').forEach(function (el, i) {
        makeDraggable(el, ci, i, 'm', true);   /* useCenter=true (transform:-50%,-50%) */
      });
      container.querySelectorAll('.expand-btn').forEach(function (el, i) {
        makeDraggable(el, ci, i, 'e', false);  /* useCenter=false (top-left corner) */
      });
    });

    // addEditUI(); // hidden — enable to reposition markers
  });
})();
