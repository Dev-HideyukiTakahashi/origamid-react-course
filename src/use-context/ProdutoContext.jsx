import React from "react";
import { GlobalContext } from "./UserContext";

export const ProdutoContext = () => {
  const global = React.useContext(GlobalContext);
  return <div>{global.nome}</div>;
};
