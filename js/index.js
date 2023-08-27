const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.querySelector("form");
const emailErrorText = document.querySelector("#errorEmail");
const emailInput = document.querySelector("#email");
const formContainer = document.querySelector(".form__container");
const successContainer = document.querySelector(".success__container");
const dismissBtn = document.querySelector("#dismissBtn");

window.addEventListener("load", (event) => {
  successContainer.style.display = "none";
});

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);

  const email = formData.get("email");

  if (checkEmail(email)) {
    // Show the error message and styles
    emailErrorText.style.display = "block";
    emailInput.classList.add("error");
  } else {
    // Hide the error message and adds styles
    emailErrorText.style.display = "none";
    emailInput.classList.remove("error");
    successContainer.style.display = "grid";
    formContainer.style.display = "none";
  }
}

emailInput.addEventListener("focus", () => {
  // Removes any error styles or content when input is focused
  emailInput.classList.remove("error");
  emailErrorText.style.display = "none";
});

dismissBtn.addEventListener("click", () => {
  // once dismiss btn clicked then the other section will be shown
  successContainer.style.display = "none";
  formContainer.style.display = "grid";
});

function checkEmail(email) {
  const atSymbol = email.indexOf("@");
  if (atSymbol < 1) return true;
  if (email === "" || email === null || email === undefined) return true;
  if (!email.match(emailRegex)) return true;
}
