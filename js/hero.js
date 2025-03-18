document.addEventListener('componentsLoaded', () => {
    function adjustHeroHeight() {
      const header = document.querySelector('.modern-header');
      const heroSection = document.querySelector('.hero-section');
      if (header && heroSection) {
        const headerHeight = header.offsetHeight;
        const viewportHeight = window.innerHeight;
        // Set hero section height to the remaining height
        heroSection.style.height = (viewportHeight - headerHeight) + 'px';
      }
    }
  
    // Run on load
    adjustHeroHeight();
  
    // Run on resize
    window.addEventListener('resize', adjustHeroHeight);
  });
  