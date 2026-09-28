console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeBtnAdd = document.querySelector('[data-js="light-mode-button"]');
const BtnToggle = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightModeBtnAdd.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

BtnToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
