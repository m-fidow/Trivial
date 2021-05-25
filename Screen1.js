let startButton = document.querySelector(".start-button");
let screen1 = document.querySelector("#screen1");
let screen2 = document.querySelector("#screen2");

function hideScreen() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}
startButton.addEventListener("click", hideScreen);
