const btnEnviar = document.getElementById("enviar");
const caixaTexto = document.getElementById("texto");
const chat = document.getElementById("mensagens");

const socket = io();

btnEnviar.addEventListener("click", () => {
  if (caixaTexto.value !== "") {
    socket.emit("new message", caixaTexto.value);
    caixaTexto.value = "";
  }
});

socket.addEventListener("new message", (msg) => {
  const elementoMensagem = document.createElement("li");
  elementoMensagem.textContent = msg;
  elementoMensagem.classList.add("mensagem");
  chat.appendChild(elementoMensagem);
});
