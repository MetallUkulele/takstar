class Bullets {
  constructor() {
    this.bullets = document.createElement("ul");
    this.bullets.classList.add("pagination");

    this.bulletCart = document.createElement("li");
    this.bulletCart.classList.add(
      "pagination__bullet",
      "bullet",
      "bullet_active"
    );

    this.bulletCartTxt = document.createElement("span");
    this.bulletCartTxt.classList.add("bullet__txt");
    this.bulletCartTxt.textContent = "кошик товарів";

    this.bulletContact = document.createElement("li");
    this.bulletContact.classList.add("pagination__bullet", "bullet");

    this.bulletContactTxt = document.createElement("span");
    this.bulletContactTxt.classList.add("bullet__txt");
    this.bulletContactTxt.textContent = "контактні данні";

    this.bulletAdress = document.createElement("li");
    this.bulletAdress.classList.add("pagination__bullet", "bullet");

    this.bulletAdressTxt = document.createElement("span");
    this.bulletAdressTxt.classList.add("bullet__txt");
    this.bulletAdressTxt.textContent = "адреса доставки";

    this.bulletCart.append(this.bulletCartTxt);
    this.bulletContact.append(this.bulletContactTxt);
    this.bulletAdress.append(this.bulletAdressTxt);
    this.bullets.append(this.bulletCart);
    this.bullets.append(this.bulletContact);
    this.bullets.append(this.bulletAdress);
  }

  get create() {
    return this.bullets;
  }
}
