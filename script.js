const container = document.querySelector('.mobile-header-nav-links');
const bars = document.querySelector('.menu');
const times = document.querySelector('.close');

function open() {
  container.style.display = 'flex';
  console.log('hello');
}

function close() {
  container.style.display = 'none';
}

bars.addEventListener('click', open);
times.addEventListener('click', close);