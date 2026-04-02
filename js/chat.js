(function(){
  // Get context from trigger button data attribute
  var trigger = document.getElementById('chatTrigger');
  var panel = document.getElementById('chatPanel');
  var overlay = document.getElementById('chatOverlay');
  var closeBtn = document.getElementById('chatClose');
  var input = document.getElementById('chatInput');
  var sendBtn = document.getElementById('chatSend');
  var messages = document.getElementById('chatMessages');
  var context = trigger ? trigger.getAttribute('data-context') || '' : '';
  var history = [];

  if (!trigger || !panel) return;

  function openChat(){
    panel.classList.add('open');
    overlay.classList.add('open');
    trigger.classList.add('hidden');
    setTimeout(function(){ input.focus(); }, 400);
  }
  function closeChat(){
    panel.classList.remove('open');
    overlay.classList.remove('open');
    trigger.classList.remove('hidden');
  }

  trigger.addEventListener('click', openChat);
  closeBtn.addEventListener('click', closeChat);
  overlay.addEventListener('click', closeChat);

  // Suggestion buttons
  messages.addEventListener('click', function(e){
    var btn = e.target.closest('.chat-suggestion');
    if(btn) sendMessage(btn.dataset.q);
  });

  function autoResize(){
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 140) + 'px';
  }
  input.addEventListener('input', autoResize);

  input.addEventListener('keydown', function(e){
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault();
      var text = input.value.trim();
      if(text) sendMessage(text);
    }
  });
  sendBtn.addEventListener('click', function(){
    var text = input.value.trim();
    if(text) sendMessage(text);
  });

  function sendMessage(text){
    var welcome = messages.querySelector('.chat-welcome');
    if(welcome) welcome.remove();

    appendMsg('user', text);
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    history.push({ role: 'user', content: text });

    var typing = document.createElement('div');
    typing.className = 'chat-msg chat-msg-ai';
    typing.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history, context: context })
    })
    .then(function(res){ return res.json(); })
    .then(function(data){
      typing.remove();
      var reply = data.reply || data.error || 'Sorry, something went wrong.';
      history.push({ role: 'assistant', content: reply });
      appendMsg('ai', reply);
      sendBtn.disabled = false;
    })
    .catch(function(){
      typing.remove();
      appendMsg('ai', 'Could not reach the AI service. Please try again.');
      sendBtn.disabled = false;
    });
  }

  function appendMsg(role, text){
    var div = document.createElement('div');
    div.className = 'chat-msg chat-msg-' + role;
    var html = text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    div.innerHTML = '<div class="chat-bubble">' + html + '</div>';
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
})();
