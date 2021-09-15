const container = document.querySelector('.mobile-header-nav-links');
const icon = document.querySelector('.menu');
const times = document.querySelector('.close');

function open() {
  container.style.display = 'flex';
}

function close() {
  container.style.display = 'none';
}

icon.addEventListener('click', open);
times.addEventListener('click', close);
