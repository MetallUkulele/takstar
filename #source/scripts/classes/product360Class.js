class Product360 {
  constructor() {
    this.products = [];
    this.productList = document.querySelector(".products__list");
  }

  addProduct(...product) {
    this.products.push(...product);
  }

  //создаем разметку товара
  createProducts() {
    this.products.forEach((product) => {
      //создаем новый товар как элемент списка
      let newProduct = document.createElement("li");
      newProduct.classList.add(
        "product",
        "container",
        `product_${product.name}`
      );

      //создаем левый блок
      let productCta = document.createElement("div");
      productCta.classList.add("product__cta");

      let productTitle = document.createElement("h3");
      productTitle.classList.add("product__title");
      productTitle.textContent = product.name;

      let productAdvantages = document.createElement("ul");
      productAdvantages.classList.add("product__advantages");

      product.advantages.forEach((advantage) => {
        let productAdvantage = document.createElement("li");
        productAdvantage.classList.add("product__advantage");
        let productAdvantageTxt = document.createElement("span");
        productAdvantageTxt.classList.add("product__advantage-text");
        productAdvantageTxt.textContent = advantage;
        productAdvantage.append(productAdvantageTxt);
        productAdvantages.append(productAdvantage);
      });

      let productPrice = document.createElement("div");
      productPrice.classList.add("product__price");
      productPrice.textContent = product.price + " " + product.currency;

      let productBtns = new BtnGroup().btns;

      productCta.append(productTitle);
      productCta.append(productAdvantages);
      productCta.append(productPrice);
      productCta.append(productBtns);

      //создаем центральный блок с 360 обзором
      let productView = document.createElement("div");
      productView.classList.add(
        "product__center",
        "swiper",
        `product__view_${product.name}`
      );

      let productSlidesWrapper = document.createElement("div");
      productSlidesWrapper.classList.add("swiper-wrapper");

      product.view360.forEach((slide) => {
        let slideWrapper = document.createElement("div");
        slideWrapper.classList.add("swiper-slide", "product__slide");
        let productImage = document.createElement("img");
        productImage.classList.add("product__image");
        productImage.src = `./img/products/${product.name}/360view/${slide}.png`;
        productImage.alt = `Навушники ${product.name}`;

        slideWrapper.append(productImage);
        productSlidesWrapper.append(slideWrapper);
        return { slideWrapper, productSlidesWrapper, productImage };
      });

      let productNavNext = document.createElement("div");
      productNavNext.classList.add("swiper-button-next");
      let productNavPrev = document.createElement("div");
      productNavPrev.classList.add("swiper-button-prev");
      let productNavScroll = document.createElement("div");
      productNavScroll.classList.add("swiper-scrollbar");

      productView.append(productSlidesWrapper);
      productView.append(productNavNext);
      productView.append(productNavPrev);
      productView.append(productNavScroll);

      //создаем правый блок ТТХ

      let productProps = document.createElement("div");
      productProps.classList.add("product__props");
      let productPropsList = document.createElement("ul");
      productPropsList.classList.add("product__props-list");

      product.props.forEach((property) => {
        let productProperty = document.createElement("li");
        productProperty.classList.add("product__property");
        let productPropertyTxt = document.createElement("span");
        productPropertyTxt.classList.add("product__property-text");
        productPropertyTxt.textContent = property;
        productProperty.append(productPropertyTxt);
        productPropsList.append(productProperty);
      });

      productProps.append(productPropsList);

      newProduct.append(productCta);
      newProduct.append(productView);
      newProduct.append(productProps);
      this.productList.append(newProduct);

      let secondaryButtons =
        this.productList.querySelectorAll(".btn-secondary");
      secondaryButtons.forEach((btn) => {
        if (!btn.getAttribute("data-id")) {
          btn.setAttribute("data-id", product.name);
        }
      });

      let mainBtns = this.productList.querySelectorAll(".btn-main");
      mainBtns.forEach((btn) => {
        if (!btn.getAttribute("data-id")) {
          btn.setAttribute("data-id", product.name);
        }
      });
    });
  }
}
