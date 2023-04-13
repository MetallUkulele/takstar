class Cart {
  constructor() {
    this.cart = document.createElement("div");
    this.cart.classList.add("cart-block");

    this.cartWrapper = document.createElement("div");
    this.cartWrapper.classList.add("cart-block__wrapper");

    this.closeCart = new CloseBtn().btn;
    document.getElementsByTagName("main")[0].append(this.cart);
    this.close();

    this.title = document.createElement("h3");
    this.title.textContent = "ваш кошик";
    this.title.classList.add("cart-block__title");

    this.cartProducts = [];
    this.productsList = document.createElement("ol");
    this.productsList.classList.add("cart-block__product-list", "cart-list");

    this.finalPrice = document.createElement("div");
    this.finalPrice.classList.add("cart-block__price");
    this.finalPricetxt = document.createElement("span");
    this.finalPricetxt.classList.add("cart-block__price-txt");
    this.finalPricetxt.textContent =
      "Нажаль, але Ви ще не додали жодного товару до кошику :(";

    this.finalPrice.append(this.finalPricetxt);

    this.checkoutBtn = document.createElement("button");
    this.checkoutBtn.classList.add(
      "cart-block__btn-checkout",
      "btn",
      "btn-main",
      "btn-checkout"
    );
    this.checkoutBtnTxt = document.createElement("span");
    this.checkoutBtnTxt.classList.add("btn-checkout__text");

    this.checkoutBtn.append(this.checkoutBtnTxt);

    this.bullets = document.createElement("div");
    this.bullets.classList.add("cart-block__bullets");

    this.cart.append(this.cartWrapper);
    this.cartWrapper.append(this.closeCart);
    this.cartWrapper.append(this.title);
    this.cartWrapper.append(this.productsList);
    this.cartWrapper.append(this.finalPrice);
    this.cartWrapper.append(this.checkoutBtn);
    this.countFinalPrice();
  }
  //проверка открыта ли корзина
  isOpen() {
    if (this.cart.classList.contains("cart-block_active")) {
      this.cart.classList.remove("cart-block_active");
      document.body.style.overflow = "";
    } else {
      this.cart.classList.add("cart-block_active");
      this.cart.style.top = `${+window.pageYOffset}px`;

      document.body.style.overflow = "hidden";
    }
  }

  //закрытие корзины
  close() {
    this.closeCart.addEventListener("click", (e) => {
      this.cart.classList.remove("cart-block_active");
      document.body.style.overflow = "";
    });
  }

  //сверка количества товара в массиве с DOM
  checkQuantity(name) {
    let productsInCart = Array.from(
      document.getElementsByClassName("cart-item__quantity")
    );
    productsInCart.forEach((product) => {
      if (
        product.closest("li").getAttribute("data-id") === name &&
        this.cartProducts.length
      ) {
        let neededProduct = this.cartProducts.find(
          (prod) => prod.name === name
        );
        product.value = neededProduct.quantity;
      }
    });
  }

  //Поиск товара в массиве корзины
  findProduct = (target) =>
    this.cartProducts.find(
      (prod) => prod.name === target.closest("li").getAttribute("data-id")
    );

  //пересчет стоимости для всех товаров
  countPriceForProducts() {
    document.querySelectorAll(".cart-item__price").forEach((el) => {
      if (this.findProduct(el)) {
        el.textContent =
          +this.findProduct(el).price * this.findProduct(el).quantity + " грн";
      }
    });
  }

  countFinalPrice() {
    let countPrice = this.cartProducts
      .map((el) => Number(el.price) * Number(el.quantity))
      .reduce((acc, curr) => acc + curr, 0);

    this.finalPricetxt.textContent =
      countPrice == 0
        ? "Нажаль, але Ви ще не додали жодного товару до кошику :("
        : "Загальна сума до сплати:  " + countPrice + " грн";

    this.checkoutBtnTxt.textContent = this.finalPricetxt.textContent.includes(
      "Нажаль"
    )
      ? "повернутись до покупок"
      : "оформити замовлення";
  }

  deleteItem(item) {
    this.cartProducts.splice(
      this.cartProducts.findIndex(
        (el) => el.name === item.closest("li").getAttribute("data-id")
      ),
      1
    );
    item.closest("li").remove();
  }

  countCartQuantity() {
    if (!Array.from(document.querySelectorAll(".cart-item__quantity")).length) {
      document.querySelector(".cart__quantity").textContent = "0";
      if (
        document
          .querySelector(".cart__quantity")
          .classList.contains("cart__quantity_active")
      ) {
        document
          .querySelector(".cart__quantity")
          .classList.remove("cart__quantity_active");
      }
      return;
    }
    if (
      !document
        .querySelector(".cart__quantity")
        .classList.contains("cart__quantity_active")
    ) {
      document
        .querySelector(".cart__quantity")
        .classList.add("cart__quantity_active");
    }
    document.querySelector(".cart__quantity").textContent = Array.from(
      document.querySelectorAll(".cart-item__quantity")
    )
      .map((el) => Number(el.value))
      .reduce((acc, arg) => acc + arg);
  }

  setLocal(el) {
    localStorage.setItem("productsArr", JSON.stringify(el.cartProducts));
    localStorage.setItem("productsList", el.productsList.innerHTML);
  }

  //добавление товара в корзину
  addProduct(name, price, quantity = 1) {
    //добавление количества товара если он уже в корзине
    if (this.cartProducts.some((prod) => prod.name === name)) {
      this.cartProducts.find((prod) => prod.name === name).quantity += 1;
      this.checkQuantity(name);
      document.querySelector(
        `.cart-item_${name} .cart-item__price`
      ).textContent =
        Number(price) *
          Number(
            document.querySelector(`.cart-item_${name} .cart-item__quantity`)
              .value
          ) +
        " грн";
      this.countFinalPrice();
      this.countCartQuantity();
      this.setLocal(this);
      return;
    }
    //добавление товара в массив корзины если его там нет

    this.cartProducts.push({ name, price, quantity });

    //создание товара в корзине
    let cartItem = document.createElement("li");
    cartItem.setAttribute("data-id", name);
    cartItem.classList.add("cart-list__item", "cart-item", `cart-item_${name}`);

    //имя товара
    let cartNameWrapper = document.createElement("div");
    cartNameWrapper.classList.add("cart-item__name-wrapper");
    let cartName = document.createElement("span");
    cartName.classList.add("cart-item__name");

    cartName.textContent = "TAKSTAR " + name;

    cartNameWrapper.append(cartName);

    //количество товара
    let cartQuantityWrapper = document.createElement("div");
    cartQuantityWrapper.classList.add("cart-item__quantity-wrapper");

    let minusQuantity = document.createElement("button");
    minusQuantity.classList.add("cart-item__minus");
    let minusQuantityTxt = document.createElement("span");
    minusQuantityTxt.classList.add("cart-item__minus-txt");
    minusQuantityTxt.textContent = "відняти";

    let plusQuantity = document.createElement("button");
    plusQuantity.classList.add("cart-item__plus");
    let plusQuantityTxt = document.createElement("span");
    plusQuantityTxt.classList.add("cart-item__plus-txt");
    plusQuantityTxt.textContent = "додати";

    let cartQuantity = document.createElement("input");
    cartQuantity.classList.add("cart-item__quantity");
    cartQuantity.type = "number";
    cartQuantity.min = "1";
    cartQuantity.max = "100";
    cartQuantity.value = `${quantity}`;

    minusQuantity.addEventListener("click", (e) => {
      cartQuantity.value = Number(cartQuantity.value) - 1;
      if (cartQuantity.value == 0) {
        this.deleteItem(e.target);
      } else {
        this.findProduct(e.target).quantity = +cartQuantity.value;
        cartPrice.textContent = Number(price) * +cartQuantity.value + " грн";
      }
      this.countFinalPrice();
      this.countCartQuantity();
      this.setLocal(this);
    });

    plusQuantity.addEventListener("click", (e) => {
      cartQuantity.value = Number(cartQuantity.value) + 1;
      this.findProduct(e.target).quantity = +cartQuantity.value;
      cartPrice.textContent = Number(price) * +cartQuantity.value + " грн";
      this.countFinalPrice();
      this.countCartQuantity();
      this.setLocal(this);
    });

    cartQuantity.addEventListener("change", (e) => {
      let value = e.target.value;
      if (value == 0) {
        this.deleteItem(e.target);
      } else {
        this.findProduct(e.target).quantity = +value;
        cartPrice.textContent = Number(price) * value + " грн";
      }
      this.countFinalPrice();
      this.countCartQuantity();
      this.setLocal(this);
    });

    minusQuantity.append(minusQuantityTxt);
    plusQuantity.append(plusQuantityTxt);
    cartQuantityWrapper.append(minusQuantity);
    cartQuantityWrapper.append(cartQuantity);
    cartQuantityWrapper.append(plusQuantity);

    let cartPriceWrapper = document.createElement("div");
    cartPriceWrapper.classList.add("cart-item__price-wrapper");

    let cartPrice = document.createElement("span");
    cartPrice.classList.add("cart-item__price");
    cartPrice.textContent = price + " грн";

    cartPriceWrapper.append(cartPrice);

    //кнопка удалить
    let deleteBtnWrapper = document.createElement("div");
    deleteBtnWrapper.classList.add("cart-item__remove-wrapper");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("cart-item__remove");

    let deleteBtnTxt = document.createElement("span");
    deleteBtnTxt.classList.add("cart-item__remove-txt");

    deleteBtnTxt.textContent = "видалити";

    deleteBtn.addEventListener("click", (e) => {
      this.deleteItem(e.target);
      this.countFinalPrice();
      this.countCartQuantity();
      this.setLocal(this);
    });

    deleteBtn.append(deleteBtnTxt);
    deleteBtnWrapper.append(deleteBtn);

    cartItem.append(cartNameWrapper);
    cartItem.append(cartQuantityWrapper);
    cartItem.append(cartPriceWrapper);
    cartItem.append(deleteBtnWrapper);
    this.productsList.append(cartItem);
    this.countFinalPrice();
    this.countCartQuantity();

    this.setLocal(this);
  }
}
//открытие корзины по иконке корзины

//кнопка закрытия

// В корзину добавляются товары по кнопке купить
// Можно менять количество
// можно удалять товары
// сумма сама меняется по количеству товара
// пишется сумма товара
// пишется общая сумма
