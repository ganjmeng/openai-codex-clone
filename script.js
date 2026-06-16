const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const cookieBanner = document.querySelector("[data-cookie-banner]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuButton?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  header.classList.toggle("menu-open", isOpen);
});

mobileMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileMenu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  }
});

cookieBanner?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cookie-choice]");
  if (!button) return;
  cookieBanner.classList.add("is-hidden");
});
