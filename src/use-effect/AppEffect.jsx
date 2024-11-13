import React from "react";

export const AppEffect = () => {
  const [contar, setContar] = React.useState(0);

  // efeito com array vazia só executa uma vez
  React.useEffect(() => {
    console.log("Executou");
  }, []);

  // toda vez que interagir com 'contar' executa
  React.useEffect(() => {
    console.log("Contando");
  }, [contar]);

  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/tablet")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <h1>{dados.preco * contar}</h1>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
