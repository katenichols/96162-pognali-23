const pageHeader = document.querySelector(".page-header");
const logoWrapper = document.querySelector(".logo-wrapper");
const modalMenu = document.querySelector(".modal-menu");
const logoToggle = document.querySelector(".logo__toggle");
const logoToggleModal = document.querySelector(".logo__toggle-modal");
const userTransportsIcon = document.querySelectorAll(".user__transports-icon");
const anchors = document.querySelectorAll("scroll-to");
const buttonChoice = document.querySelector(".country__button-choice");
const countryButtonClose = document.querySelector(
  ".country__button-close--third"
);
const countryModal = document.querySelector(".country__modal");
const countryModalClose = document.querySelector(".country__modal-close");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
logoToggleModal.classList.remove("logo__toggle-modal--nojs");

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

for (let i = 0; i < userTransportsIcon.length; i++) {
  userTransportsIcon[i].addEventListener("click", () => {
    if (
      userTransportsIcon[i].classList.contains("user__transports-icon--off")
    ) {
      userTransportsIcon[i].classList.remove("user__transports-icon--off");
    } else {
      userTransportsIcon[i].classList.add("user__transports-icon--off");
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
