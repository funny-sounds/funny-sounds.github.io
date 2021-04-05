if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

const AudioContext = window.AudioContext || window.webkitAudioContext;

let audioContext;
let source;

sounds = ["fart", "burp", "whip", "cricket", "bell", "gun", "duck", "laughter", "kiss"];

sounds.forEach((sound) => {
  document.getElementById(sound).addEventListener("click", playSound);

  function playSound() {
    if (source) {
      source.stop();
    }
    audioContext = audioContext || new AudioContext();
    var request = new XMLHttpRequest();

    source = audioContext.createBufferSource();
    source.connect(audioContext.destination);
    request.responseType = "arraybuffer";
    request.open("GET", "/sounds/" + sound + ".mp3", true);
    request.onload = function () {
      audioContext.decodeAudioData(request.response, function (buffer) {
        source.buffer = buffer;
        source.start(0);
      });
    };
    request.send();
  }
});
