'use strict';

const feedbackToggle = document.querySelector('#feedback-toggle');
const feedbackFormWrap = document.querySelector('#feedback-form-wrap');
const feedbackFormFrame = document.querySelector('#feedback-form-frame');

function loadFeedbackForm() {
  if (!feedbackFormFrame || feedbackFormFrame.hasAttribute('src')) return;

  const formUrl = feedbackFormFrame.dataset.src;
  if (formUrl) {
    feedbackFormFrame.src = formUrl;
  }
}

if (feedbackToggle && feedbackFormWrap) {
  feedbackToggle.addEventListener('click', () => {
    const willOpen = feedbackFormWrap.hidden;
    feedbackFormWrap.hidden = !willOpen;
    feedbackToggle.setAttribute('aria-expanded', String(willOpen));
    feedbackToggle.textContent = willOpen ? '收合留言表單' : '我想留言';

    if (willOpen) {
      loadFeedbackForm();
      window.requestAnimationFrame(() => {
        feedbackFormWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
}
