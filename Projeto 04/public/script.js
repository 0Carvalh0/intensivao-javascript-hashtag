const btnEnviar = document.getElementById("enviar");
const caixaTexto = document.getElementById("texto");

const socket = io();

btnEnviar.addEventListener("click", () => {
  if (caixaTexto.value !== "") {
    socket.emit("new message", caixaTexto.value);
    caixaTexto.value = "";
  }
});
