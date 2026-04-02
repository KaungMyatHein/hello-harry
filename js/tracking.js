(function(){
  function gtrack(event_name, params){
    if(typeof gtag === 'function') gtag('event', event_name, params);
  }

  document.addEventListener('click', function(e){
    var el = e.target.closest('button, a, [data-track]');
    if(!el) return;

    var tag = el.tagName.toLowerCase();
    var label = el.getAttribute('data-track-label')
      || el.getAttribute('data-q')
      || el.getAttribute('aria-label')
      || el.innerText.trim().slice(0,60)
      || el.getAttribute('href')
      || '(unlabeled)';

    // Chat suggestion chips
    if(el.classList.contains('chat-suggestion')){
      gtrack('chat_suggestion_click', {
        event_category: 'Chat',
        event_label: label,
        page_title: document.title
      });
      return;
    }

    // Chat open / close / send
    if(el.id === 'chatTrigger'){
      gtrack('chat_open', { event_category: 'Chat', page_title: document.title });
      return;
    }
    if(el.id === 'chatClose'){
      gtrack('chat_close', { event_category: 'Chat', page_title: document.title });
      return;
    }
    if(el.id === 'chatSend'){
      var input = document.getElementById('chatInput');
      gtrack('chat_message_sent', {
        event_category: 'Chat',
        event_label: input ? input.value.trim().slice(0,80) : '',
        page_title: document.title
      });
      return;
    }

    // Back button
    if(el.classList.contains('cs-back')){
      gtrack('back_button_click', {
        event_category: 'Navigation',
        event_label: 'Back to Portfolio',
        page_title: document.title
      });
      return;
    }

    // Next case study cards
    if(el.closest('.cs-next-card')){
      gtrack('next_case_study_click', {
        event_category: 'Navigation',
        event_label: label,
        page_title: document.title
      });
      return;
    }

    // CTA / external links
    if(tag === 'a'){
      var href = el.getAttribute('href') || '';
      var isExternal = href.startsWith('http') && !href.includes('hello-harry');
      gtrack(isExternal ? 'external_link_click' : 'internal_link_click', {
        event_category: 'Link',
        event_label: label,
        link_url: href,
        page_title: document.title
      });
      return;
    }

    // All other buttons
    if(tag === 'button'){
      gtrack('button_click', {
        event_category: 'UI',
        event_label: label,
        page_title: document.title
      });
    }
  });
})();
