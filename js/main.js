// for legacy browsers
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
    audioContext = audioContext || new AudioContext();
    if (!tracks[sound]) {
      const track = audioContext.createMediaElementSource(audio);
      track.connect(audioContext.destination);
      tracks[sound] = track;
    }
    audio.play();
  }
});
