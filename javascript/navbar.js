// Toggle clase .open para móvil
document.querySelector('.dropdown__btn').addEventListener('click', e => {
  e.preventDefault();
  e.currentTarget.parentElement.classList.toggle('open');
});

// Cierra dropdown al clicar fuera del menú
document.addEventListener('click', e => {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
});

// Cambia opacidad al hacer scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.classList.toggle('scrolled', window.pageYOffset > 0);
});