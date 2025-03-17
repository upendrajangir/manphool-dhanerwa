document.addEventListener("DOMContentLoaded", () => {
    const loadComponent = async (selector, url) => {
      try {
        const res = await fetch(url);
        const html = await res.text();
        document.querySelector(selector).innerHTML = html;
      } catch (err) {
        console.error(`Error loading ${url}:`, err);
      }
    };
  
    loadComponent('#sidebar', 'components/sidebar.html');
    loadComponent('#header', 'components/header.html');
    loadComponent('#mobile-nav', 'components/mobile-nav.html');
    loadComponent('#hero', 'components/hero.html');
    loadComponent('#about', 'components/about.html');
    loadComponent('#services', 'components/services.html');
    loadComponent('#pricing', 'components/pricing.html');
    loadComponent('#gallery', 'components/gallery.html');
    loadComponent('#contact', 'components/contact.html');
    loadComponent('#footer', 'components/footer.html');
  });
  