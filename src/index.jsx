import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Exercicio from "./Exercicio.jsx";
import Botao from "./Botao.jsx";
import { Exercicio2 } from "./Exercicio2/Exercicio2.jsx";
import { AppHooks } from "./hooks-aula/AppHooks.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    {/* <Exercicio /> */}
    {/* <Botao /> */}
    {/* <Exercicio2 /> */}
    <AppHooks />
  </>
);
