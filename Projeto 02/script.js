const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

const listaTamanhos = ["41 mm", "45 mm"];

const azulInverno = {
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

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

let opcaoImagemSelecionada = 1;
let opcaoTamanhoSelecionado = 1;
let opcaoCorSelecionada = 1;

function TrocarImagem() {
  const opcaoImagem = document.querySelector(
    '[name="opcao-imagem"]:checked'
  ).id;
  opcaoImagemSelecionada = opcaoImagem.charAt(0);
  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[opcaoCorSelecionada].pasta}/imagem-${opcaoImagemSelecionada}.jpeg`
}

function TrocarTamanho() {
  const opcaoTamanho = document.querySelector(
    '[name="opcao-tamanho"]:checked'
  ).id;
  opcaoTamanhoSelecionado = opcaoTamanho.charAt(0);
  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[opcaoCorSelecionada].nome} para caixa de ${listaTamanhos[opcaoTamanhoSelecionado]}`;

  if (listaTamanhos[opcaoTamanhoSelecionado] === "41 mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}

function TrocarCor() {
  const opcaoCor = document.querySelector('[name="opcao-cor"]:checked').id;
  opcaoCorSelecionada = opcaoCor.charAt(0);

  tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[opcaoCorSelecionada].nome} para caixa de ${listaTamanhos[opcaoTamanhoSelecionado]}`;

  nomeCor.innerText = `Cor - ${opcoesCores[opcaoCorSelecionada].nome}`;

  miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[opcaoCorSelecionada].pasta}/imagem-0.jpeg`
  miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[opcaoCorSelecionada].pasta}/imagem-1.jpeg`
  miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[opcaoCorSelecionada].pasta}/imagem-2.jpeg`

  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[opcaoCorSelecionada].pasta}/imagem-${opcaoImagemSelecionada}.jpeg`
}
