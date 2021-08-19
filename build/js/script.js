let pageHeader = document.querySelector(".page-header");
let logoWrapper = document.querySelector(".logo-wrapper");
let modalMenu = document.querySelector(".modal-menu");
let logoToggle = document.querySelector(".logo__toggle");
let logoToggleModal = document.querySelector(".logo__toggle-modal");
let profileModal = document.querySelector(".profile__modal");
let profileButton = document.querySelector(".profile__button");
let profileButtonModal = document.querySelector(".profile__modal-button");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
profileModal.classList.remove("profile__modal--nojs");
profileModal.classList.add("profile__modal--closed");
profileButton.classList.remove("profile__button--nojs");
profileButtonModal.classList.remove("profile__modal-button--nojs");

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

profileButton.addEventListener("click", () => {
  profileModal.classList.remove("profile__modal--closed");
});

profileButtonModal.addEventListener("click", () => {
  profileModal.classList.add("profile__modal--closed");
});
