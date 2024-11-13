import React from "react";
import { GlobalContext } from "./GlobalExercicio";

export const ProdutoContext = () => {
  const { produto, limparDados } = React.useContext(GlobalContext);
  console.log(limparDados);
  if (produto === null) return null;
  return (
    <div>
      Produto:
      {produto.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};
