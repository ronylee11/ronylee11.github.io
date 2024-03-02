// alert("Hello World!");
const arrow = document.querySelector("#arrow-group");
const intro = document.querySelector("#intro");

arrow.addEventListener("click", () => {
  intro.scrollIntoView({ behavior: "smooth" });
});

// Clear form data on page refresh
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
