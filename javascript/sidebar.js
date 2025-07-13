const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('btnToggle');
const submenuItems = document.querySelectorAll('.has-submenu');

// Toggle open/collapse en escritorio y móvil
btn.addEventListener('click', () => {
  // Si es móvil, usamos clase 'open'; si no, clase 'collapsed'
  if (window.innerWidth <= 600) {
    sidebar.classList.toggle('open');
  } else {
    sidebar.classList.toggle('collapsed');
  }
});

// Toggle submenús
submenuItems.forEach(item => {
  item.querySelector('a').addEventListener('click', e => {
    e.preventDefault();
    item.classList.toggle('open');
  });
});

// Cerrar sidebar móvil al redimensionar
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    sidebar.classList.remove('open');
  }
});
