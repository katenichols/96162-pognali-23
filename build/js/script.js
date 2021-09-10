const pageHeader = document.querySelector(".page-header");
const pageHeaderContacts = document.querySelector(".page-header__contacts");
const logoWrapper = document.querySelector(".logo-wrapper");
const logo = document.querySelector(".logo");
const logoModal = document.querySelector(".logo-modal");
const logoScroll = document.querySelector(".logo-scroll");
const logoModalScroll = document.querySelector(".logo-modal-scroll");
const modalMenu = document.querySelector(".modal-menu");
const logoToggle = document.querySelector(".logo__toggle");
const navLinks = document.querySelectorAll(".modal-menu__nav-link");
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

  if (scrolled >= 120) {
    pageHeader.classList.add("page-header--scroll");
    pageHeaderContacts.classList.add("page-header__contacts--scroll");
    logoWrapper.classList.add("logo-wrapper--scroll");
    logo.classList.add("logo--noscroll");
    logoModal.classList.add("logo-modal--noscroll");
    logoScroll.classList.remove("logo-scroll--hide")
    logoModalScroll.classList.remove("logo-modal-scroll--hide");
    logoToggle.classList.add("logo__toggle--scroll");
    modalMenu.classList.add("modal-menu--scroll");

    for (let i=0; i < navLinks.length; i++) {
      navLinks[i].classList.add("modal-menu__nav-link--scroll");
    }

  } else if (scrolled < 120) {
    pageHeader.classList.remove("page-header--scroll");
    pageHeaderContacts.classList.remove("page-header__contacts--scroll");
    logoWrapper.classList.remove("logo-wrapper--scroll");
    logo.classList.remove("logo--noscroll");
    logoModal.classList.remove("logo-modal--noscroll");
    logoScroll.classList.add("logo-scroll--hide");
    logoModalScroll.classList.add("logo-modal-scroll--hide");
    logoToggle.classList.remove("logo__toggle--scroll");
    modalMenu.classList.remove("modal-menu--scroll");

    for (let i=0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("modal-menu__nav-link--scroll");
    }
  }
});
