// Smooth scrolling on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Navbar background toggle on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(15, 15, 35, 0.98)';
  } else {
    navbar.style.background = 'rgba(15, 15, 35, 0.95)';
  }
});

// IntersectionObserver for fade-in animation on elements with .fade-in class
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for fade-in effect
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Animate timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
  observer.observe(item);
  item.style.transitionDelay = `${index * 150}ms`;
});

// Animate skill progress bars when visible
document.querySelectorAll('.skill-progress-fill').forEach(bar => {
  observer.observe(bar);
  const width = bar.getAttribute('data-width');
  bar.style.transition = 'width 1.2s ease-in-out';
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('.skill-progress-fill').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    }
  });
});
