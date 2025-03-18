document.addEventListener('componentsLoaded', function() {
  // ===== Mobile Menu Toggle =====
  const mobileMenuToggle = document.querySelector('.mobile-toggle'); // Correct selector in header.html
  const mobileNav = document.querySelector('.modern-nav'); // Header navigation for mobile

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });
  } else {
    console.error('Mobile menu toggle or mobile nav not found.');
  }

  // ===== Smooth Scrolling for Anchor Links =====
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
      if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
      }
    });
  });

  // ===== Intersection Observer for Section Reveal Animations =====
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.section');
  sections.forEach(section => observer.observe(section));

  // ===== Intersection Observer for Gallery Items Animation =====
  // This part is optional if gallery items have their own animation trigger
  const galleryItems = document.querySelectorAll('.masonry-gallery img, .masonry-gallery video');
  const galleryObserverOptions = { threshold: 0.2 };

  const galleryObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target); // Animate only once
      }
    });
  }, galleryObserverOptions);

  galleryItems.forEach(item => {
    galleryObserver.observe(item);
  });
});
