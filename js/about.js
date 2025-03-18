document.addEventListener('componentsLoaded', function() {
    // ... your other code ...
  
    // Intersection Observer for reveal animations on sections
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // For the about section, add the rubber effect once
          if (entry.target.id === "about" && !entry.target.classList.contains('rubber')) {
            entry.target.classList.add('rubber');
          }
        }
      });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));
  });
  