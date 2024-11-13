import React from "react";
import { GlobalExercicio } from "./GlobalExercicio";
import { ProdutoContext } from "./ProdutoContext";

export const AppContext = () => {
  return (
    <GlobalExercicio>
      <ProdutoContext />
    </GlobalExercicio>
    // <GlobalStorage>
    //   <ProdutoContext />
    //   <div></div>
    // </GlobalStorage>
  );
};
