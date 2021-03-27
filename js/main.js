// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();

sounds = ["fart", "whip", "cricket", "bell", "gun", "duck", "laughter", "kiss"];
sounds.forEach((sound) => {
  audio = new Audio("sounds/" + sound + ".mp3");
  document.getElementById(sound).addEventListener("click", playSound);

  function playSound() {
    audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
  }
});
