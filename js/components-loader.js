document.addEventListener("DOMContentLoaded", () => {
  const components = [
    { selector: "#header", url: "components/header.html" },
    { selector: "#mobile-nav", url: "components/mobile-nav.html" },
    { selector: "#hero", url: "components/hero.html" },
    { selector: "#about", url: "components/about.html" },
    { selector: "#services", url: "components/services.html" },
    { selector: "#pricing", url: "components/pricing.html" },
    { selector: "#gallery", url: "components/gallery.html" },
    { selector: "#contact", url: "components/contact.html" },
    { selector: "#footer", url: "components/footer.html" }
  ];

  const loadComponent = async (selector, url) => {
    try {
      const res = await fetch(url);
      const html = await res.text();
      const el = document.querySelector(selector);
      if (el) {
        el.innerHTML = html;
      }
    } catch (err) {
      console.error(`Error loading ${url}:`, err);
    }
  };

  Promise.all(components.map(comp => loadComponent(comp.selector, comp.url)))
    .then(() => {
      // Dispatch a custom event once all components are loaded.
      document.dispatchEvent(new Event("componentsLoaded"));
    })
    .catch(err => console.error("Error loading components:", err));
});
