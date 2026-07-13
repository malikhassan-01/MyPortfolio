// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') body.classList.add('light');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('portfolio-theme', body.classList.contains('light') ? 'light' : 'dark');
});

// ===== Mobile Nav =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const sideRail = document.querySelector('.side-rail');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  sideRail.classList.toggle('open');
});

document.querySelectorAll('.nav-link, .side-icon').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    sideRail.classList.remove('open');
  });
});

// ===== Active link on scroll =====
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-link');
const sideItems = document.querySelectorAll('.side-icon[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
  sideItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});


// ===== Email Click =====
const emailLink = document.getElementById("emailText");

if (emailLink) {
    emailLink.addEventListener("click", function (e) {
        e.preventDefault();

        const developerEmail = "m.hassan965934@gmail.com";
        const subject = "Portfolio Inquiry";

        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(developerEmail)}&su=${encodeURIComponent(subject)}`,
            "_blank"
        );
    });
}


// ===== Download CV placeholder =====
document.getElementById('downloadCv').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Apna CV (PDF) is button se link karne ke liye "downloadCv" link ko apni CV file ka path de dein script/HTML mein.');
});

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();