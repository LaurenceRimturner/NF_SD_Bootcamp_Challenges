console.clear();

const box = document.querySelector(".box");
const colorInput = document.querySelector('[data-js="input-color"]');
const borderRadiusInput = document.querySelector('[data-js="input-radius"]');
const rotationInput = document.querySelector('[data-js="input-rotation"]');

colorInput.addEventListener("click", (e) => {
  const currentRangedValue = e.target.value;
  box.style.backgroundColor = `hsl(${currentRangedValue}deg, 70%, 60%)`;
  console.log(currentRangedValue);
});
borderRadiusInput.addEventListener("click", (e) => {
  const currentRangedValue = e.target.value;
  box.style.borderRadius = `${currentRangedValue}` + "px";
  console.log(currentRangedValue);
});
rotationInput.addEventListener("click", (e) => {
  const currentRangedValue = e.target.value;
  box.style.transform = `rotate(${currentRangedValue}deg)`;
  console.log(currentRangedValue);
});
