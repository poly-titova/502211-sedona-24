if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu__toggle');

menuToggle.addEventListener('click', () => menu.classList.toggle('menu--opened'));
