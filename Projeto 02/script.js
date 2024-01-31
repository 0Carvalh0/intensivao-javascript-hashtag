const tituloProduto = document.getElementById("titulo-produto");
const imagemVisualizacao = document.getElementById("imagem-visualizacao");

const listaTamanhos = ["41 mm", "45 mm"];

const azulInverto = {
  nome: "Azul-inverno",
  pasta: "imagens-azul-inverno",
};

const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar",
};

const meiaNoite = {
  nome: "Meia-noite",
  pasta: "imagens-meia-noite",
};

const rosaClaro = {
  nome: "Rosa-claro",
  pasta: "imagens-rosa-claro",
};

const verdeCipreste = {
  nome: "Verde-cipreste",
  pasta: "imagens-verde-cipreste",
};

const opcoesCores = [
  "azulInverno",
  "estelar",
  "meiaNoite",
  "rosaClaro",
  "verdeCipreste",
];

let opcaoImagemSelecionada = 1;
let opcaoTamanhoSelecionado = 1;

function TrocarImagem() {
  const opcaoImagem = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  opcaoImagemSelecionada = opcaoImagem.charAt(0);
  imagemVisualizacao.src = `./imagens/opcoes-cores/imagens-azul-inverno/imagem-${opcaoImagemSelecionada}.jpeg`;
}

function TrocarTamanho() {
  const opcaoTamanho = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  opcaoTamanhoSelecionado = opcaoTamanho.charAt(0);
  tituloProduto.innerText = `Pulseira loop esportiva azul-inverno para caixa de ${listaTamanhos[opcaoTamanhoSelecionado]}`;

  if (listaTamanhos[opcaoTamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}
