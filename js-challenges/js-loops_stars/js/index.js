console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
  for (let i = 0; i < 5; i++) {
    const stars = document.createElement("img");

    if (i < filledStars) {
      stars.setAttribute("src", "assets/star-filled.svg");
    } else {
      stars.setAttribute("src", "assets/star-empty.svg");
    }

    stars.addEventListener("click", () => {
      renderStars(i + 1);
      console.log(i);
    });

    starContainer.append(stars);
  }
  // --^-- write or modify code above this line --^--
}

renderStars(3);
