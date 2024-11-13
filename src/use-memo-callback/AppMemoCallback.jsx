import React from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + 1 / 10;
  }
  return c;
}

export const AppMemoCallback = () => {
  const [contar, setContar] = React.useState(0);

  const valor = React.useMemo(() => {
    const localItem = window.localStorage.getItem("preferido");
    console.log("aconteceu o memo");
    return localItem;
  }, []);

  const t1 = performance.now(); // pega o timstamp da performance
  const numero = React.useMemo(() => operacaoLenta(), []);
  console.log(numero);
  // sem o useMemo, apenas declarando a function, estava em torno de 120 ~ 140 ms de execução
  // após, caiu para 0.20 ~ 0.30, pois salvou na memória e não executa novamente
  console.log(performance.now() - t1); // substrai o valor inicial

  // desta maneira cria o callback apenas uma vez
  const handleClick2 = React.useCallback(() => {
    setContar((contar) => contar + 1); // função
  }, []);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>Contar {contar} </button>
      <button onClick={handleClick2}>Contar com call back {contar} </button>
    </div>
  );
};
