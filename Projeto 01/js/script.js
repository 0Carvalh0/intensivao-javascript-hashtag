const BotaoPlayPause = document.querySelector("button#play-pause");
const BotaoAvancar = document.querySelector("button#proximo");
const BotaoVoltar = document.querySelector("button#anterior");
const TextCapitulo = document.querySelector("p#NumCapitulo");
const AudioLivro = document.querySelector("audio#audio-livro");

const NumCapitulos = 10;
let NumCapitulo = 1;
let Tocando = 0;

// TOCAR OU PAUSAR
function Tocar() {
  AudioLivro.play();
  BotaoPlayPause.classList.remove("bi-play-circle-fill");
  BotaoPlayPause.classList.add("bi-pause-circle-fill");
}

function Pausar() {
  AudioLivro.pause();
  BotaoPlayPause.classList.remove("bi-pause-circle-fill");
  BotaoPlayPause.classList.add("bi-play-circle-fill");
}

function TocarPausar() {
  if (Tocando === 0) {
    Tocar();
    Tocando = 1;
  } else {
    Pausar();
    Tocando = 0;
  }
}

// TROCA DE CAPÍTULO

function proximaFaixa() {
  if (NumCapitulo === NumCapitulos) {
    NumCapitulo = 1;
  } else {
    NumCapitulo += 1;
  }

  AudioLivro.src = "./audios/dom-casmurro/" + NumCapitulo + ".mp3";
  Tocar();
  Tocando = 1;
  TextCapitulo.innerText = `Capítulo ${NumCapitulo}`;
}

function voltarFaixa() {
  if (NumCapitulo === 1) {
    NumCapitulo = NumCapitulos;
  } else {
    NumCapitulo -= 1;
  }

  AudioLivro.src = "./audios/dom-casmurro/" + NumCapitulo + ".mp3";
  Tocar();
  Tocando = 1;
  TextCapitulo.innerText = `Capítulo ${NumCapitulo}`;
}

BotaoPlayPause.addEventListener("click", TocarPausar);
BotaoAvancar.addEventListener("click", proximaFaixa);
BotaoVoltar.addEventListener("click", voltarFaixa);
