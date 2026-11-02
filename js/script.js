const navigationToggler = document.querySelector(".navbar-toggler");
const mainNavigation = document.getElementById("mainNavigation");

if (navigationToggler && mainNavigation) {
  navigationToggler.addEventListener("click", () => {
    const isOpen = mainNavigation.classList.toggle("show");
    navigationToggler.setAttribute("aria-expanded", String(isOpen));
  });

  mainNavigation.querySelectorAll("a.nav-link, .navbar-actions a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        mainNavigation.classList.remove("show");
        navigationToggler.setAttribute("aria-expanded", "false");
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      mainNavigation.classList.remove("show");
      navigationToggler.setAttribute("aria-expanded", "false");
    }
  });
}
