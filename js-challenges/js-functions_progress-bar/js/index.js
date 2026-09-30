console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');
function calculateScrollPercentage() {
  const maxScroll = document.body.clientHeight - window.innerHeight;
  const percentage = (window.scrollY / maxScroll) * 100;
  progressBar.style.width = `${Math.round(percentage)}%`;

  // WindowHeight - DocumentHeight = MaxScrollHeight
  // (CurrentPosition / MaxScrollHeight) * 100 = Percentage
}

window.addEventListener("scroll", () => {
  calculateScrollPercentage();
});
