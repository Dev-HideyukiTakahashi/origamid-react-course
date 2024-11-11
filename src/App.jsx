import React from "react";

function App() {
  // podemos criar variáveis, o código gerado é javascript
  // código gerado dentro do return entre chaves {} também é javascript
  const random = Math.random();
  const ativo = false;

  // podemos misturar com html
  const titulo = <h1>App React Curso</h1>;

  // funcoes recebendo parâmetros
  function curso(nome) {
    return "Curso completo de " + nome;
  }

  const carro = {
    marca: "Ford",
    rodas: 4,
  };

  // CSS
  const estiloP = {
    color: "blue",
  };

  // trabalhando com array
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  const livros = [
    { nome: "A game of thrones", ano: 1996 },
    { nome: "A clash of kings", ano: 1998 },
    { nome: "A storm of swords", ano: 2000 },
  ];

  return (
    // necessário abrir de fechar tag se não for uma div <></>
    // seria a mesma coisa que colocar <React.Fragment></React.Fragment> de forma reduzida
    <>
      {titulo}
      <p style={estiloP} className={ativo ? "ativo" : "inativo"}>
        Random: {random}
      </p>
      <p style={estiloP}>{curso("React")}</p>
      <p>{new Date().toISOString()}</p>
      <p>
        {carro.marca} com {carro.rodas} rodas
      </p>

      {/* trabalhando com lista */}
      <ul>
        {filmes.map((filme) => (
          <li key={filme}> {filme}</li>
        ))}
      </ul>
      <hr />
      <ul>
        {livros
          .filter((livro) => livro.ano >= 1998)
          // desestruturando, seria mesma coisa que passar 'livro' e depois livro.nome e livro.ano
          .map(({ nome, ano }) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
