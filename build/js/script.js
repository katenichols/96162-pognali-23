let pageHeader = document.querySelector(".page-header");
let logoWrapper = document.querySelector(".logo-wrapper");
let modalMenu = document.querySelector(".modal-menu");
let logoToggle = document.querySelector(".logo__toggle");
let logoToggleModal = document.querySelector(".logo__toggle-modal");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");

logoToggle.addEventListener("click", () => {
  if (modalMenu.classList.contains("modal-menu--opened")) {
    modalMenu.classList.remove("modal-menu--opened");
  } else {
    modalMenu.classList.add("modal-menu--opened");
  }
});

logoToggleModal.addEventListener("click", () => {
  if (modalMenu.classList.contains("modal-menu--opened")) {
    modalMenu.classList.remove("modal-menu--opened");
  } else {
    modalMenu.classList.add("modal-menu--opened");
  }
});
