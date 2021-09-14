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
const filterCountryToggle = document.querySelector(".filter-country__toggle");
const filterContinentList = document.querySelector(
  ".filter-country__continent-list"
);
const catalogTable = document.querySelector(".catalog-table");
const filterCountryButton = document.querySelector(
  ".filter-country__button-hide"
);
const userChoiceFieldTitle = document.querySelectorAll(".user-choice__field-title");
const userChoiceFieldsets = document.querySelectorAll(".user-choice__fieldset");
const userLevelWrapper = document.querySelector(".user-choice__level-wrapper");
const navLinks = document.querySelectorAll(".modal-menu__nav-link");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
logoToggleModal.classList.remove("logo-toggle-modal--nojs");
filterCountryToggle.classList.remove("filter-country__toggle--nojs");
filterContinentList.classList.remove("filter-country__continent-list--nojs");
filterContinentList.classList.add("filter-country__continent-list--closed");
catalogTable.classList.remove("catalog-table--nojs");
catalogTable.classList.add("catalog-table--closed");

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

filterCountryToggle.addEventListener("click", (evt) => {
  evt.preventDefault();
  filterCountryToggle.classList.toggle("filter-country__toggle--clicked");
  if (
    filterContinentList.classList.contains(
      "filter-country__continent-list--closed"
    )
  ) {
    filterContinentList.classList.remove(
      "filter-country__continent-list--closed"
    );
  } else {
    filterContinentList.classList.add("filter-country__continent-list--closed");
  }
  if (catalogTable.classList.contains("catalog-table--closed")) {
    catalogTable.classList.remove("catalog-table--closed");
    filterCountryButton.classList.remove("filter-country__button-hide--modal");
  } else {
    catalogTable.classList.add("catalog-table--closed");
    filterCountryButton.classList.add("filter-country__button-hide--modal");
  }
});

filterCountryButton.addEventListener("click", () => {
  filterContinentList.classList.add("filter-country__continent-list--closed");
  catalogTable.classList.add("catalog-table--closed");
  filterCountryButton.classList.add("filter-country__button-hide--modal");
  filterCountryToggle.classList.remove("filter-country__toggle--clicked");
});

for (let i = 0; i < userChoiceFieldTitle.length; i++) {
  if (i < userChoiceFieldTitle.length - 1) {
    userChoiceFieldTitle[i].addEventListener("click", () => {
      userChoiceFieldTitle[i].classList.toggle("user-choice__field-title--clicked");
      if (userChoiceFieldsets[i].classList.contains("user-choice__fieldset--closed")) {
        userChoiceFieldsets[i].classList.remove("user-choice__fieldset--closed");
      } else {
        userChoiceFieldsets[i].classList.add("user-choice__fieldset--closed");
      }
    });
  } else {
    userChoiceFieldTitle[i].addEventListener("click", () => {
      userChoiceFieldTitle[i].classList.toggle("user-choice__field-title--clicked");
      if (userLevelWrapper.classList.contains("user-choice__level-wrapper--closed")) {
        userLevelWrapper.classList.remove("user-choice__level-wrapper--closed");
      } else {
        userLevelWrapper.classList.add("user-choice__level-wrapper--closed");
      }
    });
  }
}

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
