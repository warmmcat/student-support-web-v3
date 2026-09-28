'use strict';

(() => {
  function getElements() {
    return {
      toggle: document.querySelector('#feedback-toggle'),
      wrap: document.querySelector('#feedback-form-wrap')
    };
  }

  function setExpanded(toggle, wrap, expanded) {
    if (expanded) {
      wrap.removeAttribute('hidden');
    } else {
      wrap.setAttribute('hidden', '');
    }

    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.textContent = expanded ? '收合留言表單' : '我想留言';

    if (expanded) {
      window.requestAnimationFrame(() => {
        wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  }

  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('#feedback-toggle');
    if (!toggle) return;

    const wrap = document.querySelector('#feedback-form-wrap');
    if (!wrap) return;

    event.preventDefault();
    event.stopPropagation();

    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(toggle, wrap, !expanded);
  });
})();
