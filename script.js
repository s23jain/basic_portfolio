// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effects
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Intersection Observer for fade animations
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

// Observe all fade-slide elements
document.querySelectorAll('.fade-slide').forEach(el => {
  observer.observe(el);
});

// Timeline item animations
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200);
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.timeline-item').forEach(item => {
  timelineObserver.observe(item);
});

// Skill progress bars animation
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBars = entry.target.querySelectorAll('.skill-progress-fill');
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

document.querySelectorAll('.skill-card').forEach(card => {
  skillObserver.observe(card);
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-20px) scale(1.03)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
  
  // Staggered entrance
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, index * 150);
});

// Mouse parallax effect for hero
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero');
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;
  
  hero.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener('mouseleave', () => {
  document.querySelector('.hero').style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Preloader effect
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.8s ease';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Performance optimization
if ('IntersectionObserver' in window) {
  console.log('Animations ready! 🚀');
} else {
  console.warn('IntersectionObserver not supported');
}
