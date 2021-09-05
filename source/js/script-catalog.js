const pageHeader = document.querySelector(".page-header");
const logoWrapper = document.querySelector(".logo-wrapper");
const modalMenu = document.querySelector(".modal-menu");
const logoToggle = document.querySelector(".logo__toggle");
const logoToggleModal = document.querySelector(".logo__toggle-modal");
const filterCountryToggle = document.querySelector(".filter-country__toggle");
const filterContinentList = document.querySelector(
  ".filter-country__continent-list"
);
const catalogTable = document.querySelector(".catalog-table");
const filterCountryButton = document.querySelector(
  ".filter-country__button-hide"
);
const userChoiceButtons = document.querySelectorAll(".user-choice__button");
const userChoiceFieldsets = document.querySelectorAll(".user-choice__fieldset");
const userLevelWrapper = document.querySelector(".user-choice__level-wrapper");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
logoToggleModal.classList.remove("logo__toggle-modal--nojs");
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

for (let i = 0; i < userChoiceButtons.length; i++) {
  if (i < userChoiceButtons.length - 1) {
    userChoiceButtons[i].addEventListener("click", () => {
      userChoiceButtons[i].classList.toggle("user-choice__button--clicked");
      if (userChoiceFieldsets[i].classList.contains("user-choice__fieldset--closed")) {
        userChoiceFieldsets[i].classList.remove("user-choice__fieldset--closed");
      } else {
        userChoiceFieldsets[i].classList.add("user-choice__fieldset--closed");
      }
    });
  } else {
    userChoiceButtons[i].addEventListener("click", () => {
      userChoiceButtons[i].classList.toggle("user-choice__button--clicked");
      if (userLevelWrapper.classList.contains("user-choice__level-wrapper--closed")) {
        userLevelWrapper.classList.remove("user-choice__level-wrapper--closed");
      } else {
        userLevelWrapper.classList.add("user-choice__level-wrapper--closed");
      }
    });
  }
}
