import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Produtos } from "./Produtos";

export const Exercicio2 = () => {
  const { pathname } = window.location; // pegando a url da página, seria '/' ou '/produtos'
  let Pagina = pathname === "/produtos" ? Produtos : Home;

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};
