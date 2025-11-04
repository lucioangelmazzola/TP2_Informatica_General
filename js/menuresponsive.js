const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu-mobile');

btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
