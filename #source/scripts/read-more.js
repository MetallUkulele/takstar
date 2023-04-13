//open modal
const readMoreBtns = Array.from(document.querySelectorAll("a.btn-secondary"));
const readMoreModals = Array.from(document.querySelectorAll(".read-more"));

function checkModal(target) {
  let activeModal = readMoreModals.filter(
    (modal) => modal.dataset.id === target.dataset.id
  );
  activeModal[0].classList.add("read-more_active");
}

const aside = document.querySelector("aside");
readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    checkModal(target);
    aside.classList.add("aside_active");
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    document.body.style.position = "fixed";

    document.body.style.top = `-${scrollY}`;
  });
});

//close modal
const closeModalBtns = Array.from(aside.querySelectorAll(".modal-close"));

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    aside.classList.remove("aside_active");
    setTimeout(() => removeClassName(readMoreModals, "read-more_active"), 500);
  });
});

window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

//properties
const propertyItems = Array.from(
  document.querySelectorAll(".headphone-properties__link")
);
const propertyItemDescriptions = Array.from(
  document.querySelectorAll(".headphone-properties__tag-description")
);

function removeClassName(array, classname) {
  array.forEach((value) => {
    value.classList.remove(classname);
  });
}

propertyItems.forEach((tag, idx) => {
  tag.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.target;
    removeClassName(propertyItems, "headphone-properties__link_active");
    propertyItems[idx].classList.add("headphone-properties__link_active");

    removeClassName(
      propertyItemDescriptions,
      "headphone-properties__tag-description_active"
    );
    propertyItemDescriptions[idx].classList.add(
      "headphone-properties__tag-description_active"
    );
  });
});
