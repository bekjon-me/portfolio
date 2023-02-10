const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('nav');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav > ul li');
const allSeeProjectBtns = document.querySelectorAll('#works button');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close');
const modalH2 = document.querySelector('.modal-header h2');
const modalText = document.querySelector('.modal-body p');
const languages = document.querySelectorAll('.modal-header ul');
const image = document.querySelector('.modal-body img');

window.onscroll = () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 300) {
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

closeModalBtn.addEventListener('click', () => {
  modal.classList.toggle('open');
  modal.classList.toggle('blur');
});

const projects = [
  {
    name: 'Multi-Post Stories',
    text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './src/assets/Img Placeholder.svg',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
  },
  {
    name: 'Professional Art Printing Data',
    text: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './src/assets/worksBg.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
  },
  {
    name: 'Professional Art Printing Data',
    text: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './src/assets/worksBg.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
  },
  {
    name: 'Professional Art Printing Data',
    text: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './src/assets/worksBg.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
  },
  {
    name: 'Professional Art Printing Data',
    text: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './src/assets/worksBg.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
  },
  {
    name: 'Professional Art Printing Data',
    text: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './src/assets/worksBg.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
  },
  {
    name: 'Professional Art Printing Data',
    text: " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './src/assets/worksBg.svg',
    technologies: ['html', 'bootstrap', 'ruby'],
    live: 'https://www.google.com/',
    source: 'https://www.google.com/',
  },
];

allSeeProjectBtns.forEach((btn, mainIndex) => {
  btn.addEventListener('click', () => {
    console.log(mainIndex);
    modal.classList.toggle('open');
    modal.classList.toggle('blur');
    modalH2.textContent = projects[mainIndex].name;
    modalText.textContent = projects[mainIndex].text;
    languages.forEach((language, index) => {
      language.innerHTML = '';
      projects[mainIndex].technologies.forEach((tech) => {
        const li = document.createElement('li');
        li.textContent = tech;
        language.appendChild(li);
      });
    });
    image.src = projects[mainIndex].image;
  });
});
