export function ItemCardapio(props) {
  return (
    <div className="container-item-cardapio">
      <div>
        {/* Nome do prato */}
        <h2>{props.nome}</h2>
        {/* Preço do prato */}
        <p>{props.preco}</p>
        {/* Descrição do prato */}
        <p>{props.descricao}</p>
      </div>
      {/* Imagem do prato */}
      <img src={props.imagem} />
    </div>
  );
}
