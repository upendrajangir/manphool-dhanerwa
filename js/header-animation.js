document.addEventListener("componentsLoaded", () => {
  const header = document.querySelector(".modern-header");
  const navPills = document.querySelectorAll(".nav-pill");
  const mobileToggle = document.querySelector('.mobile-toggle');

  // Set up mobile menu toggle using mobile-nav overlay
  const mobileNavContainer = document.querySelector('#mobile-nav'); // Container where mobile-nav.html is injected
  const mobileNav = mobileNavContainer ? mobileNavContainer.querySelector('.mobile-nav') : null;
  
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      // Toggle icon between hamburger and close (X)
      if (mobileNav.classList.contains('active')) {
        mobileToggle.innerHTML = `<i class="fas fa-times"></i>`;
      } else {
        mobileToggle.innerHTML = `<i class="fas fa-bars"></i>`;
      }
    });
  } else {
    console.error('Mobile toggle or mobile nav not found.');
  }
  
  // Only proceed if header exists
  if (header) {
    // Add initial animation class on load
    header.classList.add("animate-in");

    // Scroll event to add "scrolled" class to header
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Set up nav pill selection if navPills exist
  if (navPills) {
    navPills.forEach(pill => {
      pill.addEventListener("click", (e) => {
        navPills.forEach(item => item.classList.remove("selected"));
        e.currentTarget.classList.add("selected");
      });
    });
  }
});
