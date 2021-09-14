const pageHeader = document.querySelector(".page-header");
const pageHeaderContacts = document.querySelector(".page-header__contacts");
const logoWrapper = document.querySelector(".logo-wrapper");
const logo = document.querySelector(".logo");
const logoModal = document.querySelector(".logo-modal");
const logoScroll = document.querySelector(".logo-scroll");
const logoModalScroll = document.querySelector(".logo-modal-scroll");
const modalMenu = document.querySelector(".modal-menu");
const logoToggle = document.querySelector(".logo-toggle");
const logoToggleModal = document.querySelector(".logo-toggle-modal");
const userTransportsItem = document.querySelectorAll(".user__transports-item");
const anchors = document.querySelectorAll("scroll-to");
const buttonChoice = document.querySelector(".country__button-choice");
const countryButtonClose = document.querySelector(
  ".country__button-close--third"
);
const countryModal = document.querySelector(".country__modal");
const countryModalClose = document.querySelector(".country__modal-close");
const planForm = document.querySelector(".plan-form");
const navLinks = document.querySelectorAll(".modal-menu__nav-link");
const funTextarea = document.querySelector(".fun__textarea");
const funInputError = document.querySelector(".fun__input-wrapper-error");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
logoToggleModal.classList.remove("logo-toggle-modal--nojs");

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

for (let i = 0; i < userTransportsItem.length; i++) {
  userTransportsItem[i].addEventListener("click", () => {
    if (
      userTransportsItem[i].classList.contains("user__transports-item--off")
    ) {
      userTransportsItem[i].classList.remove("user__transports-item--off");
    } else {
      userTransportsItem[i].classList.add("user__transports-item--off");
    }
  });
}

for (let anchor of anchors) {
  anchor.addEventListener("click", function (evt) {
    evt.preventDefault();

    const blockID = anchor.getAttribute("href");

    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  });
}

buttonChoice.addEventListener("click", (evt) => {
  evt.preventDefault();
  countryButtonClose.style.display = "none";
  countryModal.classList.remove("country__modal--closed");
});

countryModalClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  countryModal.classList.add("country__modal--closed");
  countryButtonClose.style.display = "block";
});

planForm.addEventListener("submit", (evt) => {
  if (funTextarea.value === "") {
    evt.preventDefault();
    funTextarea.classList.add("fun__textarea--invalid");
    funInputError.classList.add("fun__input-wrapper-error--show");
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
    logoToggle.classList.add("logo-toggle--scroll");
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
    logoToggle.classList.remove("logo-toggle--scroll");
    modalMenu.classList.remove("modal-menu--scroll");

    for (let i=0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("modal-menu__nav-link--scroll");
    }
  }
});
