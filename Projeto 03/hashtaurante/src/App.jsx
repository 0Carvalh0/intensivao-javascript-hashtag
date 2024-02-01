import Hashtaurantecapa from "./assets/hashtaurante.webp";
import { Navegacao } from "./Navegacao.jsx";
import { ItemCardapio } from "./ItemCardapio.jsx";
import "./App.css";

export function App() {
  return (
    <>
      <img src={Hashtaurantecapa} className="capa" />
      <Navegacao />
      <ItemCardapio />
    </>
  );
}
