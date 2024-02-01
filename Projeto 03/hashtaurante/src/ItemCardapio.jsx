import { enroladinhoMignon } from "./cardapio.js";

export function ItemCardapio() {
  return (
    <div className="container-item-cardapio">
      <div>
        {/* Nome do prato */}
        <h2>{enroladinhoMignon.nome}</h2>
        {/* Preço do prato */}
        <p>{enroladinhoMignon.preco}</p>
        {/* Descrição do prato */}
        <p>{enroladinhoMignon.descricao}</p>
      </div>
      {/* Imagem do prato */}
      <img src={enroladinhoMignon.imagem} />
    </div>
  );
}
