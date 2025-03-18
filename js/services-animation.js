document.addEventListener('componentsLoaded', function() {
    // Animate service cards when they enter the viewport
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = { threshold: 0.2 };
  
    const serviceObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, observerOptions);
  
    serviceCards.forEach(card => {
      serviceObserver.observe(card);
    });
  });
  