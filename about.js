const humberger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.hidden-menu');
const navLink = document.querySelectorAll('.nav-link');

function openMenu() {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  humberger.classList.remove('active');
  navMenu.classList.remove('active');
}


humberger.addEventListener('click', openMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));
