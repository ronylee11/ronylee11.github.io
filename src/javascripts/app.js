// alert("Hello World!");
const arrow = document.querySelector("#arrow-group");
const intro = document.querySelector("#intro");

arrow.addEventListener("click", () => {
  intro.scrollIntoView({ behavior: "smooth" });
});
