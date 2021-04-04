if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

const AudioContext = window.AudioContext || window.webkitAudioContext;

let audioContext;

sounds = ["fart", "burp", "whip", "cricket", "bell", "gun", "duck", "laughter", "kiss"];
audios = {};
tracks = {};

sounds.forEach((sound) => {
  audios[sound] = new Audio("sounds/" + sound + ".mp3");
  document.getElementById(sound).addEventListener("click", playSound);

  function playSound() {
    audio = audios[sound];
    audio.currentTime = 0;
    audioContext = audioContext || new AudioContext();
    if (!tracks[sound]) {
      const track = audioContext.createMediaElementSource(audio);
      track.connect(audioContext.destination);
      tracks[sound] = track;
    }
    audio.play();
  }
});
