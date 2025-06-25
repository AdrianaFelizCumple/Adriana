const audio = document.getElementById('musicaFondo');
let musicaIniciada = false;

document.addEventListener('click', () => {
  if (!musicaIniciada) {
    audio.play();
    musicaIniciada = true;
  }
});
