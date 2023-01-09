class ProductsMore {
  constructor(...products) {
    this.aside = document.querySelector(".aside");
    this.products = [...products];
  }

  createProductMore() {
    this.products.forEach((product) => {
      this.productWrapper = document.createElement("div");

      this.productWrapper.classList.add(
        "read-more",
        `read-more_${product.name}`
      );
      this.productWrapper.setAttribute("data-id", product.name);

      let closeBtnWrapper = document.createElement("div");
      closeBtnWrapper.classList.add("read-more__close-btn-wrapper");

      let closeBtn = document.createElement("button");
      closeBtn.classList.add("read-more__close-btn");
      closeBtn.textContent = "X";

      closeBtnWrapper.append(closeBtn);

      let productTitle = document.createElement("h2");
      productTitle.classList.add("read-more__title");
      productTitle.textContent = product.name;

      //создаем слайдер галереи
      let gallery = document.createElement("div");
      gallery.classList.add("read-more__slider-container", "swiper");
      let swiperWrapper = document.createElement("div");
      swiperWrapper.classList.add("swiper-wrapper");

      product.gallery.forEach((photo) => {
        let slide = document.createElement("div");
        slide.classList.add("read-more__slid", "swiper-slide");

        let slideZoom = document.createElement("div");
        slideZoom.classList.add("swiper-zoom-container");
        slideZoom.setAttribute("data-swiper-zoom", "2");

        let slideImg = document.createElement("img");
        slideImg.classList.add("swiper-zoom-target", "read-more__image");
        slideImg.src = `./img/products/${product.name}/gallery/${photo}.jpg`;
        slideImg.alt = `Навушники ${product.name}`;

        slideZoom.append(slideImg);
        slide.append(slideZoom);
        swiperWrapper.append(slide);

        return { swiperWrapper, slide, slideZoom, slideImg };
      });

      //создаем кнопку с ценой
      let ctaWrapper = document.createElement("div");
      ctaWrapper.classList.add("read-more__cta-wrapper");

      let productPrice = document.createElement("span");
      productPrice.classList.add("read-more__price");
      productPrice.textContent = product.price;

      let btn = new MainButton().btn;

      ctaWrapper.append(productPrice);
      ctaWrapper.append(btn);

      //создаем табы с свойствами товара

      let propsWrapper = document.createElement("div");
      propsWrapper.classList.add(
        "container",
        "read-more__tag-list",
        "headphone-properties"
      );

      let propsTags = document.createElement("ul");
      propsTags.classList.add("headphone-properties__tags");

      let tabArr = [
        "Опис",
        "Комплектація",
        "Характеристики",
        "Оплата та доставка",
      ];

      tabArr.forEach((tab) => {
        let propsTag = document.createElement("li");
        propsTag.classList.add("headphone-properties__tag");
        let propsTagLink = document.createElement("a");
        propsTagLink.classList.add("headphone-properties__link", "link");
        let propsTagTxt = document.createElement("span");
        propsTagTxt.classList.add("link__txt");
        propsTagTxt.textContent = tab;

        propsTagLink.append(propsTagTxt);
        propsTag.append(propsTagLink);
        propsTags.append(propsTag);

        return propsTags;
      });

      propsWrapper.append(propsTags);

      this.productWrapper.append(closeBtnWrapper);
      this.productWrapper.append(productTitle);
      this.productWrapper.append(gallery);
      this.productWrapper.append(ctaWrapper);
      this.productWrapper.append(propsWrapper);
      this.aside.append(this.productWrapper);
    });
  }
}
