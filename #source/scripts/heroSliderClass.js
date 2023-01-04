class HeroSlider {
  constructor() {
    this.slides = [];
    this.slider = document.querySelector(".swiper-wrapper");
  }

  addSlide(slide) {
    this.slides.push(slide);
  }

  //создаем слайд в слайдере
  createSlide() {
    this.slides.forEach((slide) => {
      //создаем слайд и внутреннюю обертку
      let newSlide = document.createElement("div");
      newSlide.classList.add(`swiper-slide`, `${slide.name}`);

      let slideWrapper = document.createElement("div");
      slideWrapper.classList.add("hero__slide-container");

      let cta = document.createElement("div");
      cta.classList.add("hero__cta");

      //создаем заголовок
      let title = document.createElement("h2");
      title.classList.add("hero__title");
      title.textContent = slide.name;

      //создаем подзаголовок
      let subtitle = document.createElement("p");
      subtitle.classList.add("hero__subtitle", `${slide.name}__subtitle`);
      subtitle.innerHTML = slide.subtitle;

      //создаем цену
      let price = document.createElement("strong");
      price.classList.add("hero__price");
      price.textContent = slide.price;

      //добавляем кнопки
      let btns = document.createElement("div");
      btns.classList.add("hero__buttons");

      let mainBtn = document.createElement("button");
      mainBtn.classList.add("btn", "btn-main");
      mainBtn.textContent = "замовити";

      let secondaryBtn = document.createElement("a");
      secondaryBtn.classList.add("btn", "btn-secondary");
      secondaryBtn.textContent = "читати докладніше";

      btns.append(mainBtn);
      btns.append(secondaryBtn);

      //создаем изображение товара
      let imgWrapper = document.createElement("div");
      imgWrapper.classList.add("hero__img", `${slide.name}__img`);

      let img = document.createElement("img");
      img.src = slide.img;

      imgWrapper.append(img);

      //создаем вложенность
      cta.append(title);
      cta.append(subtitle);
      cta.append(price);
      cta.append(btns);

      newSlide.append(slideWrapper);
      slideWrapper.append(cta);
      slideWrapper.append(imgWrapper);

      this.slider.append(newSlide);

      let subtitleSelection = document.querySelectorAll(
        ".hero__subtitle strong"
      );

      subtitleSelection.forEach((selection) => {
        if (selection.classList.value === "") {
          selection.classList.add(
            `${slide.name}__selection`,
            "hero__subtitle-selection"
          );
        }
      });

      secondaryBtn.setAttribute("data-id", slide.name);
    });
  }
}

let newSlider = new HeroSlider();
newSlider.addSlide(forge);
newSlider.addSlide(shade);
newSlider.addSlide(flit);
console.log(newSlider);

newSlider.createSlide();
