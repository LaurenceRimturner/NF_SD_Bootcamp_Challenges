const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach((color) => {
  const body = document.body;
  const coloredDiv = document.createElement("div");
  coloredDiv.classList.add("color-box");
  coloredDiv.style.backgroundColor = color;

  body.append(coloredDiv);
  // console.log("color", color);
});

function renderColorBox(color) {
  const body = document.body;
  const coloredDiv = document.createElement("div");
  coloredDiv.classList.add("color-box");
  coloredDiv.style.backgroundColor = color;

  body.append(coloredDiv);
  // console.log("color", color);
}
colors.forEach(renderColorBox);

// Er geht durch colors in jede einzelne Farbe und nutzt die Function zum erstellen der Elemente
