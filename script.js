"use strict";
const main = document.querySelector("main");
const btnSubmit = document.getElementById("submit");
const btnDismiss = document.getElementById("dismiss");
const emailInputSection = document.querySelector(".email-input-section");
const emailInput = document.getElementById("email");

// FUNTIONS
const isEmailValid = function (email) {
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(email);
};

emailInputSection.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEmailValid(emailInput.value)) {
    main.classList.add("success-state");
    emailInputSection.classList.remove("error");
  } else {
    emailInputSection.classList.add("error");
  }
});

// DISMISS MESSAGE
btnDismiss.addEventListener("click", (e) => {
  e.preventDefault();
  main.classList.remove("success-state");
  emailInput.value = "";
});
