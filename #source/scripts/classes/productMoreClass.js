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

      let closeBtn = new CloseBtn().btn;

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

      gallery.append(swiperWrapper);

      //создаем кнопку с ценой
      let ctaWrapper = document.createElement("div");
      ctaWrapper.classList.add("read-more__cta-wrapper");

      let productPrice = document.createElement("span");
      productPrice.classList.add("read-more__price");
      productPrice.textContent = product.price + " " + product.currency;

      let btn = new MainButton().btn;

      btn.setAttribute("data-id", product.name);

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

      let propsDescription = document.createElement("div");
      propsDescription.classList.add("headphone-properties__description");

      tabArr.forEach((tab, index) => {
        let propsTag = document.createElement("li");
        propsTag.classList.add("headphone-properties__tag");
        let propsTagLink = document.createElement("a");
        propsTagLink.classList.add("headphone-properties__link", "link");
        if (index === 0) {
          propsTagLink.classList.add("headphone-properties__link_active");
        }
        let propsTagTxt = document.createElement("span");
        propsTagTxt.classList.add("link__txt");
        propsTagTxt.textContent = tab;

        propsTagLink.append(propsTagTxt);
        propsTag.append(propsTagLink);
        propsTags.append(propsTag);

        let propsTagDesc = document.createElement("div");
        propsTagDesc.classList.add("headphone-properties__tag-description");

        switch (index) {
          case 0:
            let tagAbout = document.createElement("p");
            tagAbout.classList.add("read-more__tag-description-text");
            tagAbout.textContent = product.about;

            propsTagDesc.append(tagAbout);
            propsTagDesc.classList.add(
              "headphone-properties__tag-description_active"
            );

            break;

          case 1:
            let tagCompList = document.createElement("ul");
            tagCompList.classList.add("tag-description__list");

            product.complectation.forEach((item) => {
              let tagCompItem = document.createElement("li");
              tagCompItem.classList.add("tag-description__item");

              let tagCompTxt = document.createElement("span");
              tagCompTxt.classList.add("tag-description__text");
              tagCompTxt.textContent = item;
              tagCompItem.append(tagCompTxt);
              tagCompList.append(tagCompItem);
            });

            propsTagDesc.append(tagCompList);
            break;
          case 2:
            let tagPropList = document.createElement("ul");
            tagPropList.classList.add("tag-description__list");

            product.props.forEach((item) => {
              let tagPropItem = document.createElement("li");
              tagPropItem.classList.add("tag-description__item");

              let tagPropTxt = document.createElement("span");
              tagPropTxt.classList.add("tag-description__text");
              tagPropTxt.textContent = item;
              tagPropItem.append(tagPropTxt);
              tagPropList.append(tagPropItem);
            });

            propsTagDesc.append(tagPropList);
            break;

          default:
            propsTagDesc.innerHTML = `
						<div class="tag-description__wrapper payment">
							<h4 class="tag-description__title payment-title">Доставка</h4>
							<p class="tag-description__paragraph">
								Безкоштовна доставка Новою Поштою до відділення
							</p>
							<p class="tag-description__paragraph">
								Кур'єрська доставка оплачується згідно тарифів Нової Пошти
							</p>
						</div>
						<div class="tag-description__wrapper return">
							<h4 class="tag-description__title return-title">Оплата</h4>
							<p class="tag-description__paragraph">
								Ви можете обрати один із способів розрахування — післяплата,
								оплата на картку Приват-банку, оплата кур'єру.
							</p>
							<p class="tag-description__paragraph">
								Комісію при оплаті післяплатою платить Покупець, а при оплаті
								на картку Приват-банку — Продавець
							</p>
						</div>
						<div class="tag-description__wrapper payment">
							<h4 class="tag-description__title payment-title">Гарантія</h4>
							<p class="tag-description__paragraph">
								Гарантія від виробника 24 місяці
							</p>
						</div>`;
            break;
        }

        propsDescription.append(propsTagDesc);

        return { propsTags, propsDescription };
      });

      propsWrapper.append(propsTags);
      propsWrapper.append(propsDescription);

      this.productWrapper.append(closeBtn);
      this.productWrapper.append(productTitle);
      this.productWrapper.append(gallery);
      this.productWrapper.append(ctaWrapper);
      this.productWrapper.append(propsWrapper);
      this.aside.append(this.productWrapper);
    });
  }
}
