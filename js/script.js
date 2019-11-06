const button = document.querySelector(".button-form-open");
const forma = document.querySelector(".form");

const in_date = forma.querySelector("[id=check-in-date]");
const out_date = forma.querySelector("[id=check-out-date]");
const form = forma.querySelector("form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  forma.classList.toggle("active-form");
});

form.addEventListener("submit", function (evt) {
  if (!in_date.value || !out_date.value) {
    evt.preventDefault();
    forma.classList.add("modal-error");
    console.log("Нужно ввести даты");
  }
});
