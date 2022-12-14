'use strict';

const element = document.getElementById('images');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#2') {
    element.classList.add('gallery__images--action-2');
  } else {
    element.classList.remove('gallery__images--action-2');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#3') {
    element.classList.add('gallery__images--action-3');
  } else {
    element.classList.remove('gallery__images--action-3');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#4') {
    element.classList.add('gallery__images--action-4');
  } else {
    element.classList.remove('gallery__images--action-4');
  }
});
