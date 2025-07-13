window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.pageYOffset > 0) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});