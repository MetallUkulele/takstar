document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.getItem("productsList") &&
    localStorage.getItem("productsList") != ""
  ) {
    cart.productsList.innerHTML = localStorage.getItem("productsList");
    cart.cartProducts = JSON.parse(localStorage.getItem("productsArr"));
    Array.from(document.getElementsByClassName("cart-item__quantity")).forEach(
      (el) => {
        let elInArr = cart.cartProducts.find(
          (value) => value.name === el.closest("li").getAttribute("data-id")
        );

        el.value = elInArr.quantity;

        el.addEventListener("change", (e) => {
          let value = e.target.value;
          if (value == 0) {
            cart.deleteItem(e.target);
          } else {
            elInArr.quantity = +value;
            el.closest("li").querySelector(".cart-item__price").textContent =
              Number(elInArr.price) * value + " грн";
          }
          cart.countFinalPrice();
          cart.countCartQuantity();
          cart.setLocal(cart);
        });
      }
    );
    Array.from(document.getElementsByClassName("cart-item__remove")).forEach(
      (el) => {
        el.addEventListener("click", (e) => {
          cart.deleteItem(e.target);
          cart.countFinalPrice();
          cart.countCartQuantity();
          cart.setLocal(cart);
        });
      }
    );

    Array.from(document.getElementsByClassName("cart-item__minus")).forEach(
      (el) => {
        el.addEventListener("click", (e) => {
          el.nextElementSibling.value = Number(el.nextElementSibling.value) - 1;
          if (el.nextElementSibling.value == 0) {
            cart.deleteItem(e.target);
          } else {
            cart.findProduct(el).quantity = +el.nextElementSibling.value;
            el.closest("li").querySelector(".cart-item__price").textContent =
              Number(cart.findProduct(el).price) *
                cart.findProduct(el).quantity +
              " грн";
          }
          cart.countFinalPrice();
          cart.countCartQuantity();
          cart.setLocal(cart);
        });
      }
    );
    Array.from(document.getElementsByClassName("cart-item__plus")).forEach(
      (el) => {
        el.addEventListener("click", (e) => {
          el.previousElementSibling.value =
            Number(el.previousElementSibling.value) + 1;
          cart.findProduct(el).quantity = +el.previousElementSibling.value;
          el.closest("li").querySelector(".cart-item__price").textContent =
            Number(cart.findProduct(el).price) * cart.findProduct(el).quantity +
            " грн";
          cart.countFinalPrice();
          cart.countCartQuantity();
          cart.setLocal(cart);
        });
      }
    );
    cart.countPriceForProducts();
    cart.countFinalPrice();
    cart.countCartQuantity();
  }
  return;
});
