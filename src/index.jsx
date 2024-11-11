import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Exercicio from "./Exercicio.jsx";
import Botao from "./Botao.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Exercicio />
    <Botao />
  </>
);
