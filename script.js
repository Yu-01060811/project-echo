console.log("SYSTEM ONLINE");
const startButton = document.getElementById("start-button");
const gameMenu = document.getElementById("game-menu");
const backButton = document.getElementById("back-button");
startButton.addEventListener("click", function () {
  gameMenu.hidden = false;
  startButton.hidden = true;
});
backButton.addEventListener("click", function () {
  gameMenu.hidden = true;
  startButton.hidden = false;
});
