const button = document.querySelector(".button-form-open");
const form = document.querySelector(".form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("active-form");
});