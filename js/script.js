// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  
    // Smooth scrolling for all anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
        // Hide mobile nav if open
        if (mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
        }
      });
    });
  
    // Intersection Observer for reveal animations on sections
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);
  
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));
  });
  