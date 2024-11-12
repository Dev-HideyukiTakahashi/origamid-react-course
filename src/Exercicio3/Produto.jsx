import React from "react";

export const Produto = ({ dados }) => {
  if (dados)
    return (
      <>
        <div>
          <h1>{dados.nome}</h1>
          <h1>R$ {dados.preco}</h1>
          <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
      </>
    );
};
