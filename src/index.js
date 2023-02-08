const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('nav');
const links = document.querySelectorAll('.nav-link');

console.log(hamburger);

hamburger.addEventListener('click', (e) => {
  console.log('clicked');
  hamburger.classList.toggle('is-active');
  navbar.classList.toggle('open');
});

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log('link clicked');
    // hamburger.classList.toggle("is-active");
    // navLinks.classList.toggle("open");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
