let pageHeader = document.querySelector(".page-header");
let logoWrapper = document.querySelector(".logo-wrapper");
let modalMenu = document.querySelector(".modal-menu");
let logoToggle = document.querySelector(".logo__toggle");
let logoToggleModal = document.querySelector(".logo__toggle-modal");
let profile = document.querySelector(".profile__modal");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
profile.classList.remove("profile__modal--nojs");
profile.classList.add("profile__modal--closed");

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
