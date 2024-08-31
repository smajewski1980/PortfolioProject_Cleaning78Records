const playButton = document.querySelector(".gif-play-btn");
const imageElement = document.getElementById("washingGif");

function startGif() {
  imageElement.src = "./images/clean78Animation.gif";
  imageElement.style.filter = "brightness(1)";
  imageElement.style.cursor = "pointer";
  playButton.style.display = "none";
  imageElement.addEventListener("click", stopGif);
}
function stopGif() {
  imageElement.src = "./images/gifPlaceholder.png";
  imageElement.style.filter = "brightness(0.25)";
  imageElement.style.cursor = "default";
  playButton.style.display = "grid";
}

playButton.addEventListener("click", startGif);
