// target elements
const heroVideo = document.getElementById("heroVideo");
const switchBtn = document.querySelector(".switch-btn");
const preloader = document.getElementById("preloader");

// functions
function handleVideoPlaying() {
  heroVideo.paused ? (heroVideo.play(), switchBtn.classList.remove("slide")) : (heroVideo.pause(), switchBtn.classList.add("slide"));
}

// events
switchBtn.addEventListener("click", handleVideoPlaying, false);
window.addEventListener("load", function() {
  preloader.classList.add("hide-preloader");
},false);