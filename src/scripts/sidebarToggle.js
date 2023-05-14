document.getElementById("sidebar-show").addEventListener("click", () => {
  document.getElementById("sidebar-show").classList.remove("hidden");
  document.getElementById("sidebar").classList.toggle("-translate-x-full");
  document.getElementById("sidebar").classList.remove("invisible");
  document.getElementById("open-arrow").classList.toggle("rotate-180");
});
