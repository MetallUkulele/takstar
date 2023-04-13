class Product {
  constructor(
    name,
    subtitle,
    price,
    img,
    advantages,
    props,
    gallery,
    about,
    complectation
  ) {
    this.name = name;
    this.subtitle = subtitle;
    this.price = price;
    this.currency = "грн";
    this.img = img;
    this.advantages = advantages;
    this.props = props;
    this.view360 = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];
    this.gallery = gallery;
    this.about = about;
    this.complectation = complectation;
  }
}

class Products {
  constructor() {
    this.products = [];
  }

  addProduct(...product) {
    this.products.push(...product);
  }
}
