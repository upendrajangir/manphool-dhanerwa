document.addEventListener("componentsLoaded", () => {
  const header = document.querySelector(".modern-header");
  const navPills = document.querySelectorAll(".nav-pill");
  const mobileToggle = document.querySelector(".mobile-toggle");

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

  // Set up mobile menu toggle if it exists
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const mobileNav = document.querySelector(".modern-nav");
      if (mobileNav) {
        mobileNav.classList.toggle("active");
      }
    });
  }
});
