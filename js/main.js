sounds = ["fart", "whip", "cricket", "bell", "gun", "duck", "laughter", "kiss"];
sounds.forEach((sound) => {
  document.getElementById(sound).addEventListener("click", playSound);

  function playSound() {
    audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
  }
});
