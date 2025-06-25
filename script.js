const envelope = document.querySelector('.envelope');
const audio = document.getElementById('musicaFondo');
let musicaIniciada = false;

envelope.addEventListener('click', () => {
  if (!musicaIniciada) {
    audio.play();
    musicaIniciada = true;
  }
});
