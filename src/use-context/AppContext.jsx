import React from "react";
import { ProdutoContext } from "./ProdutoContext";
import { GlobalStorage } from "./UserContext";

export const AppContext = () => {
  return (
    <GlobalStorage>
      <ProdutoContext />
      <div></div>
    </GlobalStorage>
  );
};
