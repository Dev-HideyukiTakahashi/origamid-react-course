import React, { useEffect } from "react";

export const GlobalContext = React.createContext();

export const GlobalExercicio = ({ children }) => {
  const url = "https://ranekapi.origamid.dev/json/api/produto/";
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limparDados() {
    setProduto(null);
  }

  return (
    <GlobalContext.Provider value={{ produto, setProduto, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
