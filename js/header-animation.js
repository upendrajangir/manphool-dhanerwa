// header-animation.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.modern-header');
    const navPills = document.querySelectorAll('.nav-pill');
  
    // Add initial animation class on load
    header.classList.add('animate-in');
  
    // Scroll event to add "scrolled" class to header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Optional: Highlight the selected navigation pill on click
    navPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        navPills.forEach(item => item.classList.remove('selected'));
        e.currentTarget.classList.add('selected');
      });
    });
  
    // Optional: Mobile menu toggle functionality (if you build out mobile menu)
    const mobileToggle = document.querySelector('.mobile-toggle');
    if (mobileToggle) {
      mobileToggle.addEventListener('click', () => {
        const mobileNav = document.querySelector('.modern-nav');
        if (mobileNav) {
          mobileNav.classList.toggle('active');
        }
      });
    }
  });
  