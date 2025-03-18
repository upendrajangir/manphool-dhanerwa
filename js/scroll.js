document.addEventListener('componentsLoaded', () => {
    const heroSection = document.querySelector('#hero');
    const aboutSection = document.querySelector('#about');
  
    if (heroSection && aboutSection) {
      heroSection.addEventListener('wheel', (e) => {
        // If the user scrolls down in the hero section, trigger auto-scroll to about section
        if (e.deltaY > 0) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  
    // ... (existing code for header, mobile nav, etc.) ...
  });
  