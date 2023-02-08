const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('nav');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav > ul li');

window.onscroll = () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
};

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