const q = console.log;

const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");

const playAudio = (element) => {
  audio.innerHTML = `<source id="audioSource" src="sounds/${element.innerText}.mp3" type="audio/mpeg">
  Your browser does not support the audio element.`;
  audio.load();
  audio.play();
};
