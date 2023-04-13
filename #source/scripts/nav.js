const nav = document.querySelector(".nav__list");

nav.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.body.style.overflow === "hidden") {
    cart.isOpen();
  }
  if (
    e.target.classList.contains("nav__link") ||
    e.target.classList.contains("nav__text")
  ) {
    const href = e.target.classList.contains("nav__text")
      ? e.target.closest("a").getAttribute("href")
      : e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({ behavior: "smooth" });
  }
});

const logo = document.querySelector(".logo__link");
logo.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.body.style.overflow === "hidden") {
    cart.isOpen();
  }
  document.body.scrollIntoView({ behavior: "smooth" });
});

const cartIcon = document.querySelector(".cart");
cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  cart.isOpen();
});
