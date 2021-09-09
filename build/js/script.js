const pageHeader = document.querySelector(".page-header");
const pageHeaderContacts = document.querySelector(".page-header__contacts");
const logoWrapper = document.querySelector(".logo-wrapper");
const logoWrapperModal = document.querySelector(".logo-wrapper--modal");
const logo = document.querySelectorAll(".logo");
const logoScroll = document.querySelector(".logo-scroll");
const logoScrollDesktop = document.querySelector(".logo-scroll--desktop");
const modalMenu = document.querySelector(".modal-menu");
const logoToggle = document.querySelector(".logo__toggle");
const navLink = document.querySelector(".modal-menu__nav-link");
const logoToggleModal = document.querySelector(".logo__toggle-modal");
const profileModal = document.querySelector(".profile__modal");
const profileButton = document.querySelector(".profile__button");
const profileButtonModal = document.querySelector(".profile__modal-button");
const feedbackForm = document.querySelector(".feedback__form");
const feedbackInput = feedbackForm.querySelector(".feedback__input");
const feedbackButton = document.querySelector(".feedback__button");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
logoToggleModal.classList.remove("logo__toggle-modal--nojs");
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
  profileButton.setAttribute("disabled", true);
});

profileButtonModal.addEventListener("click", () => {
  profileModal.classList.add("profile__modal--closed");
  profileButton.removeAttribute("disabled");
});

feedbackForm.addEventListener("submit", (evt) => {
  let reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  if (reg.test(feedbackInput.value) === false) {
    evt.preventDefault();
    feedbackInput.placeholder = "Введите email";
    feedbackInput.value = "";
    feedbackInput.classList.add("feedback__input--invalid");
  }
});

feedbackInput.addEventListener("click", () => {
  feedbackInput.placeholder = "E-mail";
  if (feedbackInput.classList.contains("feedback__input--invalid")) {
    feedbackInput.classList.remove("feedback__input--invalid");
  }
});

window.addEventListener("scroll", () => {
  let scrolled = window.scrollY;

  if (scrolled >= 200) {
    pageHeader.classList.add("page-header--scroll");
    pageHeaderContacts.classList.add("page-header__contacts--scroll");
    logo.classList.add("logo--noscroll");
    logoScroll.classList.remove("logo-scroll--hide");
    logoToggle.classList.add("logo__toggle--scroll");
    logoWrapper.classList.add("logo-wrapper--scroll");
    logoWrapperModal.classList.add("logo-wrapper--scroll");
    modalMenu.classList.add("modal-menu--scroll");
  } else if (scrolled < 200) {
    pageHeader.classList.remove("page-header--scroll");
    pageHeaderContacts.classList.remove("page-header__contacts--scroll");
    logo.classList.remove("logo--noscroll");
    logoScroll.classList.add("logo-scroll--hide");
    logoToggle.classList.remove("logo__toggle--scroll");
    logoWrapper.classList.remove("logo-wrapper--scroll");
    logoWrapperModal.classList.remove("logo-wrapper--scroll");
    modalMenu.classList.remove("modal-menu--scroll");
  }
});
