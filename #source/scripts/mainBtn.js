let mainBtns = Array.from(document.querySelectorAll(".btn-main"));

mainBtns.forEach((btn) => {
  switch (btn.textContent) {
    case "оформити замовлення":
      console.log(btn.textContent);
      btn.addEventListener("click", () => cart.isOpen());
      break;
    case "повернутись до покупок":
      btn.addEventListener("click", () => cart.isOpen());
      break;
    default:
      btn.addEventListener("click", (e) => {
        cart.addProduct(
          e.target.getAttribute("data-id"),
          products.products.find(
            (el) => el.name === btn.getAttribute("data-id")
          ).price
        );

        mainBtns.forEach((el) => {
          if (el.getAttribute("data-id") === e.target.getAttribute("data-id")) {
            el.classList.remove("btn-main");
            el.classList.add("btn-main_disabled");
            el.textContent = "товар додано до кошику";

            setTimeout(() => {
              el.classList.remove("btn-main_disabled");
              el.classList.add("btn-main");
              el.textContent = "замовити";
            }, 1500);
          }
        });
      });
      break;
  }
});
