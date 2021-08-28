let pageHeader = document.querySelector(".page-header");
let logoWrapper = document.querySelector(".logo-wrapper");
let modalMenu = document.querySelector(".modal-menu");
let logoToggle = document.querySelector(".logo__toggle");
let logoToggleModal = document.querySelector(".logo__toggle-modal");
let profileModal = document.querySelector(".profile__modal");
let profileButton = document.querySelector(".profile__button");
let profileButtonModal = document.querySelector(".profile__modal-button");
let feedbackForm = document.querySelector(".feedback__form");
let feedbackInput = feedbackForm.querySelector(".feedback__input");
let feedbackButton = document.querySelector(".feedback__button");

pageHeader.classList.remove("page-header--nojs");
logoWrapper.classList.remove("logo-wrapper--nojs");
modalMenu.classList.remove("modal-menu--nojs");
logoToggleModal.classList.remove("logo__toggle-modal-nojs");
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
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  if (re.test(feedbackInput.value) === false) {
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

// function initMap() {
//   let coordinates = { lat: 59.938635, lng: 30.323118 },
//     map = new google.maps.Map(document.querySelector("map-block__map"), {
//       center: coordinates,
//     }),
//     image = "../img/icons/icon_baloon.svg",
//     marker = new google.maps.Marker({
//       position: coordinates,
//       map: map,
//       icon: image,
//       animation: google.maps.Animation.BOUNCE,
//     });
// }
