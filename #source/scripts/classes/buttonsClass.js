class MainButton {
  constructor() {
    this.mainBtn = document.createElement("button");
    this.mainBtn.classList.add("btn", "btn-main");
    this.mainBtn.textContent = "замовити";
  }

  get btn() {
    return this.mainBtn;
  }
}

class SecondaryButton {
  constructor() {
    this.secondaryButton = document.createElement("a");
    this.secondaryButton.classList.add("btn", "btn-secondary");
    this.secondaryButton.textContent = "читати докладніше";
  }

  get btn() {
    return this.secondaryButton;
  }

  set attr(value) {
    this.secondaryButton.setAttribute("data-id", value);
  }
}

class BtnGroup {
  constructor() {
    this.btnGroup = document.createElement("div");
    this.btns.classList.add("buttons-group");
    this.mainBtn = new MainButton().btn;
    this.secondaryButton = new SecondaryButton().btn;
    this.btnGroup.append(this.mainBtn);
    this.btnGroup.append(this.secondaryButton);
  }

  get btns() {
    return this.btnGroup;
  }
}

class CloseBtn {
  constructor() {
    this.closeBtnWrapper = document.createElement("div");
    this.btn.classList.add("modal-close");

    this.closeBtn = document.createElement("span");
    this.closeBtn.classList.add("modal-close__btn");
    this.closeBtn.textContent = "зачинити";

    this.closeBtnWrapper.append(this.closeBtn);
  }

  get btn() {
    return this.closeBtnWrapper;
  }
}
