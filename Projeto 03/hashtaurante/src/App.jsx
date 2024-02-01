import Hashtaurantecapa from "./assets/hashtaurante.webp";
import { Navegacao } from "./Navegacao.jsx";
import "./App.css";

export function App() {
  return (
    <>
      <img src={Hashtaurantecapa} className="capa" />
      <Navegacao />
    </>
  );
}
