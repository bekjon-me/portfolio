const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('nav');
const links = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navbar.classList.toggle('open');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.toggle('open');
    hamburger.classList.toggle('is-active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
